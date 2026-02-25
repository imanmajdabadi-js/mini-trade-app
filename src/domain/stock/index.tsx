import { useEffect, useState } from 'react';
import { createOrder } from '../../services/api';
import type { Stock } from '../../types';
import { Urls } from './api';

interface Stockprops {
  selectedAccountId: string | undefined;
}

const StockPage = ({ selectedAccountId }: Stockprops) => {
  const [stockList, setStockList] = useState<Stock[]>([]);
  const [quantity, setQuantity] = useState<string>('');

  const handleBuyStock = (stock: Stock) => {
    if (selectedAccountId === undefined) {
      console.log('selectedAccount is undefined');
      return;
    }
    createOrder({
      side: 'Buy',
      symbol: stock.symbol,
      accountId: selectedAccountId,
      quantity: +quantity,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(value);
  };

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
            <button
              onClick={() => handleBuyStock(stock)}
              className="w-40 h-10 bg-green-200 rounded-xl"
            >
              buy
            </button>
            <input
              className="w-40 bg-gray-50"
              value={quantity}
              onChange={handleChange}
              type="text"
            />
          </ul>
        );
      })}
    </div>
  );
};

export default StockPage;
