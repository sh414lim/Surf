import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { fetchList, getUser } from '../../service/api';
import { Grid, Box, Typography, Paper } from '@mui/material';
import SubHeader from '../../common/SubHeader';

interface ListInterface {
  id: number;
  genre_ids: number[];
  original_title: string;
  overview: string;
  poster_path: string;
  vote_count: number;
}

function ShopListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const text = axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=13dce73d621a57563589d58029a15906')
      .then(res => {
        setList(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(list);
  return (
    <>
      <SubHeader />
      <Grid container spacing={2} sx={{ width: '80%', margin: '30px 0px 0px 230px' }}>
        {list &&
          list.map(({ id, original_title, overview, poster_path, vote_count }: ListInterface, index: number) => (
            <>
              <Grid
                xs={6}
                sx={{
                  padding: '10px',
                  width: '80%',
                }}
              >
                {/* <Paper> */}
                <Typography sx={{ fontSize: '20px' }}>{original_title}</Typography>
                <Box sx={{ width: '90%' }}>
                  <Typography>{vote_count}</Typography>
                  <Box sx={{ justifyContent: 'end', display: 'flex' }}>
                    <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
                  </Box>
                </Box>
                {/* </Paper> */}
              </Grid>
            </>
          ))}
      </Grid>
    </>
  );
}

// popular:()=>api.get("/3/movie/popular"),
// toprated:()=>api.get("/3/movie/top_rated"),
// upcoming:()=>api.get("/3/movie/upcoming"),
// nowplaying:()=>api.get("/3/movie/now_playing"),

export default ShopListPage;
