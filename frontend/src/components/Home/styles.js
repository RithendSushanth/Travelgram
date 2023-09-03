// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   appBarSearch: {
//     borderRadius: 4,
//     marginBottom: '1rem',
//     display: 'flex',
//     padding: '16px',
//   },
//   pagination: {
//     borderRadius: 4,
//     marginTop: '1rem',
//     padding: '16px',
//   },
//   gridContainer: {
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column-reverse',
//     },
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  formContainer: {
    animation: '$slideIn 0.5s ease-in-out',
  },
  slideIn: {
    animationName: '$slideIn',
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in-out',
  },
  '@keyframes slideIn': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
}));
