export interface Position {
  symbol: string;
  quantity: number;
}

export interface Account {
  accountId: string;
  accountNumber: string;
  accountHolderName: string;
  balance: number;
  userId: string;
  positions?: Position[];
  orders?: string[];
}

export interface User {
  userId: string;
  accounts: Account[];
}
