import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
// import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {

    const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography  className={classes.heading} variant="h2" align="center">Travelgram</Typography>
        <img className={classes.image} src={memories} alt="travelgram" height="60" />
        </div>
      </AppBar>
  )
}

export default Navbar
