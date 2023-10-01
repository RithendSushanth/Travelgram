import React, { useState } from 'react';
import { Typography, Box, Toolbar, AppBar, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import useStyles from './styles.js';
import { getPlaceData } from '../../api/travel.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);
    // You can add further logic for search functionality here
    try {
      // Fetch data from the travel API
      const placesData = await getPlaceData('restaurants');

      // Pass the data back to the parent component (App.js)
      onPlaceChanged(placesData);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Restaurants, Hotels & Attractions around you
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;