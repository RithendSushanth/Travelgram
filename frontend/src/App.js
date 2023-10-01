import React, { useEffect, useState } from 'react';
import { Card, Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, Grid, Divider, Typography } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import './dark-mode.css';
// import './index.css'



import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

import Header from './components/Header/Header';
import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import UserProfile from './components/UserProfile/UserProfile';



import { getPlaceData } from './api/travel';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem('profile'));

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    // Set the class on the body element when dark mode changes
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  useEffect(() => {
    setIsLoading(true);

    getPlaceData(type)
    .then((response) => {
      console.log(response.data); // Log the response data
      setPlaces(response.data); // Update state with the response data
      setFilteredPlaces([])
    })
    .catch((error) => {
      console.error(error);
    }).finally(() => {
      setIsLoading(false);
    })
}, [type]);

  const handlePlaceChanged = (placesData) => {
    setPlaces(placesData); // Update state with the response data
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light', // This will set the theme type to dark or light
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar onButtonClick={() => setShowContent(true)} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/posts/:id" exact component={PostDetails} />
            <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
            <Route path="/user-profile" exact render={() => <UserProfile user={user} />} />
          </Switch>

          {/* <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography> */}
          {/* Conditionally render based on 'showContent' state */}
          {showContent && (
            <>
              <CssBaseline />
              <Header onPlaceChanged={handlePlaceChanged} />
              <Card elevation={6}>
                <Grid container spacing={3} style={{ width: '100%', margin: 0 }}>
                  <Grid item xs={12} md={14}>
                    <List places={filteredPlaces.length ? filteredPlaces : places}
                      type={type}
                      setType={setType} // Make sure you're passing setType down
                      rating={rating}
                      setRating={setRating}
                      childClicked={childClicked}
                      isLoading={isLoading} />
                  </Grid>
                </Grid>
              </Card>
            </>
          )}
          <Route path="/about-us" component={AboutUs} />
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;