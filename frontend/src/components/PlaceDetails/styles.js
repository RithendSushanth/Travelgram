// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles(() => ({
//   chip: {
//     margin: '5px 5px 5px 0',
//   },
//   subtitle: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
//   },
//   spacing: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chip: {
    margin: '5px 5px 5px 0',
    backgroundColor: theme.palette.type === 'dark' ? '#555' : '#eee', // Adjust the background color for dark mode
    color: theme.palette.type === 'dark' ? '#fff' : '#000', // Adjust the text color for dark mode
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
