import React from 'react';
import AppBar from '../components/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
      },
});

const img = "https://freesvg.org/img/thumbs-up-guy.png";

const description = "Welcome to the exciting world of space land ownership! Here at Planet Properties we offer you the unique opportunity to own a piece of land on one of the celestial bodies in our solar system. Whether you're a space enthusiast, a collector of unique assets, or simply looking for a unique investment opportunity, our website provides you with the tools and resources you need to make your dream a reality. With a variety of prime locations to choose from, including the Moon, Mars, and beyond, you're sure to find the perfect space land to suit your needs. So why wait? Take the first step towards owning your own piece of the cosmos today!"

const Home = props => {

    return (
        <>
        <ThemeProvider theme={darkTheme}>
            <AppBar title="Home" />
            </ThemeProvider>  
                    <Container sx={{py: 8}} maxWidth="md">
                            <Grid>
                                <Card sx={{backgroundColor: 'gray', height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           Welcome <b>USER!</b> to Planetary Properties! 
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
                                            {description}
                                        </Typography>
                                        <Typography align="left">
                                            Start your epic purchases by visting our wonderful <a href="/listings">Listings</a> page and checking out our space land! You could also contribute by going to <a href="/listing/create">Create Listing</a> and selling some of your own space land!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>  
                    </Container>
        </>
    );
};

export default Home;