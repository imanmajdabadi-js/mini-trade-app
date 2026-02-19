import { useEffect, useState } from 'react';
import { Urls } from './api';
import type { Stock } from './types';

const StockPage = () => {
  const [stockList, setStockList] = useState<Stock[]>([]);

  useEffect(() => {
    const url = Urls.stock();
    fetch(url)
      .then((res) => res.json())
      .then((res) => setStockList(res));
  }, []);
  return (
    <div className="mt-4">
      {stockList.map((stock) => {
        return (
          <ul className="space-y-6 rounded-xl bg-white shadow-2xl mt-4 p-4" key={stock.symbol}>
            <li>{stock.name}</li>
            <li>{stock.currentPrice}</li>
            <li>{stock.symbol}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default StockPage;
