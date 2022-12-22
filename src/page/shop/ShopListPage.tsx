import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { fetchList, getUser } from '../../service/api';

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
      {list &&
        list.map(({ id, original_title, overview, poster_path, vote_count }: ListInterface, index: number) => (
          <>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
            <p>{original_title}</p>
            <p>{id}</p>
            <p>{overview}</p>
            <p>{vote_count}</p>
          </>
        ))}
    </>
  );
}

// popular:()=>api.get("/3/movie/popular"),
// toprated:()=>api.get("/3/movie/top_rated"),
// upcoming:()=>api.get("/3/movie/upcoming"),
// nowplaying:()=>api.get("/3/movie/now_playing"),

export default ShopListPage;
