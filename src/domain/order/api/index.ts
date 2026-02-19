import { baseUrl } from '../../../services/api';

export const orderUrls = {
  createOrder: () => {
    return `${baseUrl}/api/Order`;
  },
};
