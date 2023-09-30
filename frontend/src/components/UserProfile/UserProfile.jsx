import React from 'react';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserPosts from '../UserProfile/UserPosts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const UserProfile = ({ user, postId }) => {
  const classes = useStyles();

  if (!user?.result?.name) {
    return <div>Loading...</div>; // Add a loading state or error handling here
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>
                  {user?.result.name.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6" component="h2">
                  <b>{user?.result?.name}</b>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {user?.result.email}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <UserPosts userName={user?.result.name} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
