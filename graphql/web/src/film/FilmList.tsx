import { useState } from 'react';
import { useFilmsQuery } from '../generated/graphql';
import { Grid, Box, Typography, Paper } from '@mui/material';
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';

interface MovieListInterface {
  director: object;
  director_id: number;
  id: number;
  posterImg: string;
  release: string;
  subtitle: string;
  title: string;
}
interface ApiType {
  data: object;
}

export default function FilmList(): JSX.Element {
  const { data, loading, error } = useFilmsQuery();

  if (error) return <p>{error.message}</p>;
  console.log(data);
  return (
    <>
      {!loading &&
        data &&
        data.films.map((films, index) => (
          <>
            {films.title}
            <img src={films.posterImg} />
          </>
        ))}
    </>
  );
}

{
  /* {!loading && data && data.films.map(({director,director_id,id,posterImg,release,subtitle,title}:MovieListInterface,index:number)=>(
          ))}   */
}
