import React from 'react';
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';
export default function AdvertisementDetail() {
  return (
    <Grid container spacing={1} sx={{ margin: '30px 0px 0px 0px', backgroundColor: 'black', color: 'white' }}>
      <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ padding: '10px', padding: '80px' }}>What Is Your Choice?</Typography>
      </Grid>
    </Grid>
  );
}
