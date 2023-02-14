import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AppBar from '../components/AppBar';
import { Button, Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
const Listing = (props) => {

    const { id } = props.match.params;
    const apiUrl = 'http://localhost:3001/listings';

    const [ inputData, setInputData ] = useState({title: '', 
                                                  author: '', 
                                                  shortDescription: '', 
                                                  longDescription: '', 
                                                  mainImage: ''}); 

    const history = useHistory();

    const {reset} = useForm({defaultValues: inputData}); //pass in an object with default values from input data

    // loads data - similar to componentDidMount()
    useEffect( () => {
        console.log("useEffect: ", inputData);
        // fetch data 
        if (id) {
            const getApiData = () => {
                fetch(apiUrl + '/' + id, {method: "GET"})
                    .then(response => response.json())
                    .then(data => loadData(data));
            };
            getApiData();
        }
    }, []);

    const handleBuy = (e) => {

        //as suggested by my brother
        let cardNum = prompt('Enter the first digit of your card number.');
        let purchase = prompt('Enter yes to purchase this space land!');
        purchase = purchase.toLowerCase();

        if(purchase == "yes") {
            alert("Congrats! You're the proud owner of land #" + inputData.id + " " + inputData.title);
            handleDelete();
        }
    };

    const handleDelete = (e) => {
        console.log('delete item:' + inputData.id);
        fetch(apiUrl + '/' + inputData.id, {method: "DELETE"})
            .then(response => response.json())
            .then(res => { //reloads data after deleting
                history.push("/listings");
            });
    };


    const loadData = (data) => {
        console.log('loadData:', data);
        setInputData(data);
        reset({
            title: data.title,
            author: data.author,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            mainImage: data.mainImage
        });
    };

    return (
        <>
        <ThemeProvider theme={Theme}>
        <ThemeProvider theme={darkTheme}>
            <AppBar title="Listings" />
            </ThemeProvider>  
                    <Container sx={{py: 8}} maxWidth="md">
                            <Grid>
                                <Card sx={{backgroundColor: 'gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia 
                                        component="img"
                                        sx={{ pt: '10%', width: "60%", height: "auto", margin: "auto"}}
                                        image={inputData.mainImage}
                                        alt="random"
                                        title={inputData.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           {inputData.title} 
                                        </Typography>
                                        <Typography align="left">
                                            {inputData.shortDescription}
                                        </Typography>
                                        <Typography align="center">
                                            {inputData.longDescription}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Button sx={{px: 6}} variant="contained" color="secondary" size="small" onClick={handleBuy}>
                                    Buy now
                                </Button>
                            </Grid>  
                    </Container>
                    </ThemeProvider>  
        </>
    );
};

export default Listing;