import React, { useState, useEffect, useMemo } from 'react';
import { fetchList } from '../../service/api';

function ShopListPage() {
  const [list, setList] = useState('');

  useEffect(() => {
    const test = fetchList();
    console.log(test);
  }, []);

  return <div>ShopListPage</div>;
}

export default ShopListPage;
