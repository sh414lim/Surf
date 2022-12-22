import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function SubHeader() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          width: '80%',
          margin: '0px 0px 0px 200px',
        }}
      >
        <Typography sx={{ padding: '30px', fontSize: '20px', opacity: '0.8', fontWeight: '200' }}>
          How Is Your Surfing Shop?
        </Typography>
      </Box>
    </>
  );
}

export default SubHeader;
