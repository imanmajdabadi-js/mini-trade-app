export interface Account {
  accountId: string;
  accountNumber: string;
  accountHolderName: string;
  balance: number;
  userId: string;
  positions?: string[];
  orders?: string[];
}

export interface User {
  userId: string;
  accounts: Account[];
}
