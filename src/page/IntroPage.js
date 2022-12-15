import React from 'react';
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { makeStyles } from '@mui/styles';
import MainImageList from './main/MainImageList';
import AdvertisementDetail from './main/AdvertisementDetail';

const useStyles = makeStyles({
  headNav: {
    padding: '1px 3px 0px 3px',
  },
});

function IntroPage() {
  const customStyle = useStyles();

  return (
    <>
      <Grid container spaciong={3} sx={{ padding: '5px' }}>
        <Grid xs={4} sx={{ display: 'flex' }}>
          <Typography>S U R F</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography sx={{ display: 'flex' }}>
            <FmdGoodIcon size="small" />
            <Typography sx={{ fontSize: '15px', margin: '3px 0px 0px 0px', '&:hover': { color: 'blue' } }}>
              Where is Best Place?
            </Typography>
          </Typography>
        </Grid>

        <Grid xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography className={customStyle.headNav}>SHOP</Typography>
            <Typography className={customStyle.headNav}>BITCH</Typography>
            <Typography className={customStyle.headNav}>LOGIN</Typography>
            <Typography className={customStyle.headNav}>SIGN UP</Typography>
          </Box>
        </Grid>
      </Grid>
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
