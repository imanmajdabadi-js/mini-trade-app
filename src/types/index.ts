import type { OrderSide, OrderState } from '../domain/order/order.types';

export interface Position {
  symbol: string;
  quantity: number;
  stockId: string;
  accountId: string;
}

export interface Account {
  id: string;
  balance: number;
  availableBalance: number;
  position: Position;
  reservedBalance: number;
  positions: Position[];
}
export interface AccountHistoryEntry {
  orderId: string;
  accountId: string;
  stockId: string;
  side: OrderSide;
  state: OrderState;
  quantity: number;
  price: number;
  timestamp: Date;
  note?: string;
}
