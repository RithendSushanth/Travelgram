import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { gapi } from 'gapi-script'
import jwt_decode from 'jwt-decode';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './input';
// import cors from 'cors';


//reason google auth is not working  go to chrome settings --> advanced --> clear browsing data --> cached images and files


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const clientId = "824311242227-h6fk6a8n29i9k69ec75veo2goi9teoto.apps.googleusercontent.com"


const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    // using optional chaining ?. it means it will not throw err if we sometimes dont have access to res obj
    //err : cannot get property profileObj of undefined
    // const result = res?.profileObj;
    // const token = res?.tokenId;

    // try {
    //   dispatch({ type: AUTH, data: { result, token } });

    //   history.push('/');
    // } catch (error) {
    //   console.log(error);
    // }
    console.log('Google Success Response:', res);

    console.log('Google Success Response:', res);
    const decodedToken = jwt_decode(res.credential);

    try {
      console.log('Dispatching ....');
        dispatch({ type: AUTH, data: decodedToken });

        history.push('/');
    } catch (error) {
        console.log('Error dispatching AUTH:', error);
    }


  };

  const googleError = (err) => alert('Google Sign In was unsuccessful. Try again later');
  const googleFailure = (error) => {
    console.log();
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // google Oauth
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
  //     });
  //   }

  //   gapi.load('client:auth2', start);
  // }, []); // <- Add an empty dependency array here



  return (

    <GoogleOAuthProvider clientId="824311242227-h6fk6a8n29i9k69ec75veo2goi9teoto.apps.googleusercontent.com">
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>

            {/* google login */}
            {/* <GoogleLogin
              render={(renderProps) => (
                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              onError={(error) => console.log('Google login error:', error)}
              cookiePolicy="single_host_origin"
            /> */}

            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
