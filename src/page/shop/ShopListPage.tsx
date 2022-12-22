import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { fetchList, getUser } from '../../service/api';

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
  return <>{list && list.map((props, index) => JSON.stringify(props))}</>;
}

// popular:()=>api.get("/3/movie/popular"),
// toprated:()=>api.get("/3/movie/top_rated"),
// upcoming:()=>api.get("/3/movie/upcoming"),
// nowplaying:()=>api.get("/3/movie/now_playing"),

export default ShopListPage;
