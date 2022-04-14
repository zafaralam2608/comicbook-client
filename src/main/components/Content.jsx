import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';
import Profile from './Profile';
import Album from './Album';

const Content = () => {

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route exact path="/" element={<div>TO DO</div>} />
          <Route path="/profiles" element={<Album />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default Content;
