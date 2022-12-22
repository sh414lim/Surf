import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  headNav: {
    padding: '1px 3px 0px 3px',
  },
});

const Header = () => {
  const customStyle = useStyles();

  return (
    <Grid
      container
      spaciong={3}
      sx={{ padding: '15px', width: '97%', margin: '0px 0px 0px 10px', borderBottom: '1px solid rgba(0,0,0,0.2)' }}
    >
      <Grid xs={4} sx={{ display: 'flex' }}>
        <Typography sx={{ fontSize: '20px' }}>S U R F</Typography>
      </Grid>
      <Grid xs={4} sx={{ margin: '0px 0px 0px 0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ display: 'flex' }}>
            <FmdGoodIcon size="small" />
            <Link to="/list">
              <Typography sx={{ fontSize: '19px', margin: '0px 0px 0px 0px', '&:hover': { color: 'blue' } }}>
                Where is Best Place?
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Grid>

      <Grid xs={4}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography className={customStyle.headNav}>SHOP</Typography>
          <Typography className={customStyle.headNav}>BITCH</Typography>
          <Typography className={customStyle.headNav}>
            {' '}
            <Link to="/login">LOGIN</Link>
          </Typography>
          <Typography className={customStyle.headNav}>SIGN UP</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
