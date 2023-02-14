import React from 'react';
import AppBar from '../components/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
      },
});

const img = "https://st3.depositphotos.com/12985848/18327/i/1600/depositphotos_183277200-free-stock-photo-partial-view-man-arms-crossed.jpg";

const NotFound = props => {

    return (
        <>
        <ThemeProvider theme={darkTheme}>
            <AppBar title="Home" />
            </ThemeProvider>  
                    <Container sx={{py: 8}} maxWidth="md">
                            <Grid>
                                <Card sx={{backgroundColor: 'gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           404 Page Not Found.
                                </Typography>
                                    <CardMedia 
                                            component="img"
                                            sx={{ pt: '10%', width: "60%", height: "auto", margin: "auto"}}
                                            image={img}
                                            alt="random"
                                            title="asasd"
                                        />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography align="left">
                                           Whoops! No land here... click <a href="/">Here</a> to head back to stable grounds.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>  
                    </Container>
        </>
    );
};

export default NotFound;