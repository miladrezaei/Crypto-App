import React, { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin';

import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setIsloading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsloading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
