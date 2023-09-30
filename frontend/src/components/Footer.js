import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" align="center" color="textSecondary">
      <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          About Us
        </Link>
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
      Travelgram: Explore and Share Wild Adventures
      </Typography>
    </Container>
  );
};

export default Footer;
