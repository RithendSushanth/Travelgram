// components/AboutUs.js

import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.spacing(1),
      color: theme.palette.text.primary, // Set the text color for dark mode
    },
    title: {
      marginBottom: theme.spacing(3),
      fontWeight: 'bold',
      color: theme.palette.text.primary, // Set the text color for dark mode
    },
    content: {
      lineHeight: '2.5',
      color: theme.palette.text.primary, // Set the text color for dark mode
    },
  }));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h4" align="center" className={classes.title} color="textSecondary">
                Travelgram: Explore and Share Wild Adventures
            </Typography>
            <Typography variant="body1" className={classes.content} color="textSecondary">
                Welcome to Travelgram, where creativity finds its voice and connections are forged through shared experiences.
                Our platform is more than just a space for posts; it's a community of thinkers, creators, and visionaries.
            </Typography>
            <Typography variant="body1" className={classes.content} color="textSecondary">
                At Travelgram, we understand the power of expression. That's why we've created an environment that encourages
                every user to share their unique perspective with the world. Whether you're an artist, a writer, a traveler, or simply someone with a story to tell, this is your canvas.
            </Typography>
            <Typography variant="body1" className={classes.content} color="textSecondary">
                Our team is composed of individuals who are not only passionate about technology but also deeply committed to the idea of fostering genuine connections.
                We believe that every post has the potential to inspire, to educate, and to bring people together.
            </Typography>
            <Typography variant="body1" className={classes.content} color="textSecondary">
                We've poured countless hours into crafting an experience that feels natural and seamless.
                From the moment you log in to the instant you hit 'post', we want you to feel a sense of belonging. Our features are designed with you in mind, aiming to provide an environment that sparks creativity and encourages interaction.
            </Typography>
            <Typography variant="body1" className={classes.content} color="textSecondary">
                Thank you for being a part of our growing community. Together, we're shaping a space where voices are heard, stories are valued, and connections are made.
                Welcome to Travelgram, where every post is a step towards a more connected world.
            </Typography>
        </Container>
    );
};

export default AboutUs;
