import React from 'react';
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';

import MainImageList from './MainImageList';
import AdvertisementDetail from './AdvertisementDetail';
import Header from '../../common/Header';

function IntroPage() {
  return (
    <>
      <Grid container spaciong={1}>
        <MainImageList />
      </Grid>
      <Grid container spaciong={1}>
        <AdvertisementDetail />
      </Grid>
    </>
  );
}

export default IntroPage;
