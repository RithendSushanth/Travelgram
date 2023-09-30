// import React, { useState, useEffect } from 'react';
// import { AppBar, Typography, Toolbar, Avatar, Button, withWidth } from '@material-ui/core';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';

// import useStyles from './styles';
// import memories from '../../images/taj.png';
// import lgImage from '../../images/lg.png';
// import DarkModeToggle from '../DarkModeToggle';

// const Navbar = ({ onButtonClick, width, darkMode, toggleDarkMode }) => {
//   const classes = useStyles();
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const location = useLocation();

//   const isDesktop = width === 'sm' || width === 'md' || width === 'lg' || width === 'xl';

//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });

//     history.push('/');

//     setUser(null);
//   };

//   const handleGoToList = () => {
//     if (onButtonClick) {
//       onButtonClick(); // Call the onButtonClick function passed from App.js
//       history.push('/list')
//     }
//   };

//   useEffect(() => {
//     const token = user?.token;

//     if (token) {
//       const decodedToken = decode(token);

//       if (decodedToken.exp * 1000 < new Date().getTime()) {
//         logout();
//       }
//     }

//     setUser(JSON.parse(localStorage.getItem('profile')));
//   }, [location]);



//   return (
//     <>
//     <AppBar className={classes.appBar} position="static" color="inherit">
//       <div className={classes.brandContainer}>
//         <Typography
//           component={Link}
//           to="/"
//           className={classes.heading}
//           variant="h2"
//           align="center"
//         >
//           Travelgram
//         </Typography>
//         <img className={classes.image} src={memories} alt="travelgram icon" height="60" />
//       </div>
//       <Toolbar className={classes.toolbar}>
//         {user?.result ? (
//           <div className={classes.profile}>
//             <Link to="/user-profile">
//               <Avatar
//                 className={`${classes.purple} ${classes.avatar}`}
//                 alt={user?.result.name}
//                 src={user?.result.imageUrl}
//               >
//                 {user?.result.name.charAt(0)}
//               </Avatar>
//             </Link>
//             <Typography className={classes.userName} variant="h6">
//               {user?.result.name}
//             </Typography>
//             {isDesktop ? (
//               <Button
//                 variant="contained"
//                 className={classes.logout}
//                 color="secondary"
//                 onClick={logout}
//               >
//                 Logout
//               </Button>
//             ) : (
//               <img
//                 src={lgImage}
//                 alt="logout"
//                 onClick={logout}
//                 style={{ cursor: 'pointer', maxHeight: '30px' }}
//               />

//             )}
//           </div>
//         ) : (
//           <Button
//             component={Link}
//             to="/auth"
//             variant="contained"
//             color="primary"
//           >
//             Sign In
//           </Button>
//         )}
//         <Button
//           variant="contained"
//           className={classes.goToComponent}
//           color="primary"
//           onClick={handleGoToList}
//         >
//           TripAdvisor
//         </Button>
//       </Toolbar>
//     </AppBar>
//     <Button
//     variant="contained"
//     className={classes.darkModeToggle}
//     color="default"
//     onClick={toggleDarkMode}
//   >
//     {darkMode ? 'Light Mode' : 'Dark Mode'}
//   </Button>
//   </>
//   );
// };

// export default withWidth()(Navbar);

import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, withWidth, FormControlLabel, Switch } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import memories from '../../images/taj.png';
import lgImage from '../../images/lg.png'; 

const Navbar = ({ onButtonClick, width, darkMode, toggleDarkMode }) => {
  const classes = useStyles();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const isDesktop = width === 'sm' || width === 'md' || width === 'lg' || width === 'xl';

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  const handleGoToList = () => {
    if (onButtonClick) {
      onButtonClick(); 
      history.push('/list')
    }
  };

  React.useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (
    <>
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={`${classes.heading} ${darkMode ? classes.whiteText : ''}`}
          variant="h2"
          align="center"
        >
          Travelgram
        </Typography>
        <img className={classes.image} src={memories} alt="travelgram icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Link to="/user-profile">
              <Avatar
                className={`${classes.purple} ${classes.avatar}`}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
            </Link>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            {isDesktop ? (
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <img
                src={lgImage}
                alt="logout"
                onClick={logout}
                style={{ cursor: 'pointer', maxHeight: '30px' }}
              />
            )}
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
        <Button
          variant="contained"
          className={classes.goToComponent}
          color="primary"
          onClick={handleGoToList}
        >
          TripAdvisor
        </Button>
      </Toolbar>
    </AppBar>
      <div className={classes.darkModeToggle}>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label={darkMode ? 'Dark Mode' : 'Light Mode'}
        />
      </div>
</>
  );
};

export default withWidth()(Navbar);

