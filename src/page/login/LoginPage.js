import React from 'react';
import { Box, Tab, Tabs, Typography, Grid, TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <Grid container spacing={1} sx={{ display: 'flex' }}>
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid black',
          margin: '30px',
          padding: '40px',
        }}
      >
        <Typography sx={{ padding: '20px', fontSize: '25px' }}>L O G I N </Typography>
      </Grid>
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" />
        <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" />
      </Grid>
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Grid>
    </Grid>
  );
};

export default LoginPage;
