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
