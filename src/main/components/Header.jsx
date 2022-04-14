import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from './AppBar';

const Header = ({ handleDrawerOpen, open }) => {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar sx={{ pr: '24px' }} >
        <IconButton
          edge="start"
          color="default"
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          sx={{ marginRight: '36px', ...(open && { display: 'none' }), }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;