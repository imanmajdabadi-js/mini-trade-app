import { baseUrl } from '../../../services/api';

export const accountUrls = {
  createAccount: () => {
    return `${baseUrl}/api/Account`;
  },
  getAccount: (accountId: string) => {
    return `${baseUrl}/api/${accountId}`;
  },
};
