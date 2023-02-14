import React from 'react';
import {useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Listings = () => {


    const [ cards, setRows ] = useState([]); //set rows to empty array
    const apiUrl = 'http://localhost:3001/listings';
    const history = useHistory();

    // similar to componentDidMount()
    useEffect( () => {
        // Go get data
        // fetch data 
        getApiData();
        // eslint-disable-next-line
    }, []);

    const getApiData = () => {
        fetch(apiUrl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };

    const handleView = (e) => {
        const itemId = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('id');
        //console.log('edit item:' + itemId);
        history.push("/listing/view/" + itemId);
    };

    const handleCreate = () => {
        history.push("/listing/create");
    }
    
    return (
        <>
        <ThemeProvider theme={darkTheme}>
            <AppBar title="Listings" />    
            </ThemeProvider>    
            
            <Container sx={{py: 8}} maxWidth="md">
                    <Button sx={{px: 6}} variant="contained" size="large" color="secondary" onClick={handleCreate}>
                        Create Listing!
                    </Button>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid id={card.id} item key={card.id} xs={12} sm={6} md={6}>
                                <Card sx={{backgroundColor: 'gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia 
                                        component="img"
                                        sx={{ pt: '50%' }}
                                        image={card.mainImage}
                                        alt="random"
                                        title={card.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           {card.title} 
                                        </Typography>
                                        <Typography align="left">
                                            {card.shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={handleView}>
                                            View
                                        </Button>
                                    </CardActions>    
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
           
        </>
    );
};

export default Listings;