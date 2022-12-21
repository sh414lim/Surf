import React from 'react';
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';

import MainImageList from './MainImageList';
import AdvertisementDetail from './AdvertisementDetail';
import Header from '../../common/Header';

function IntroPage() {
  return (
    <>
      <Grid>
        <MainImageList />
      </Grid>
      <Grid>
        <AdvertisementDetail />
      </Grid>
    </>
  );
}

export default IntroPage;
