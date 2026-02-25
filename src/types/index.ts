export interface Position {
  symbol: string;
  quantity: number;
  stockId: string;
  accountId: string;
}

export interface Stock {
  symbol: string;
  name: string;
  currentPrice: number;
}

type OrderSide = 'Buy' | 'Sell';

export interface AccountHistoryEntry {
  orderId: string;
  accountId: string;
  stockId: string;
  side: OrderSide;
  state: string;
  quantity: number;
  price: number;
  timestamp: Date;
  note?: string;
}

export interface Position {
  symbol: string;
  quantity: number;
}

interface Order {
  orderId: string;
  accountId: string;
  symbol: string;
  quantity: number;
  side: string;
  status: string;
  createdAtUtc: string;
  executedAtUtc: string;
  cancelledAtUtc: string;
}

export interface Account {
  accountId: string;
  accountNumber: string;
  accountHolderName: string;
  balance: number;
  userId: string;
  positions?: Position[];
  orders?: Order[];
}

export interface User {
  userId: string;
  accounts: Account[];
}
