import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { fetchList, getUser } from '../../service/api';

function ShopListPage() {
  const [list, setList] = useState('');

  useEffect(() => {
    const text = axios
      .get('https://api.themoviedb.org/3/movie/550?api_key=13dce73d621a57563589d58029a15906')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <div>ShopListPage</div>;
}

export default ShopListPage;
