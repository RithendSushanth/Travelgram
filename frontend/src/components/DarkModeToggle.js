import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label={darkMode ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default DarkModeToggle;
