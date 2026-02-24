export const baseUrl = 'http://localhost:8080';

interface OrderReqeust {
  symbol: string;
  quantity: number;
  side: 'Buy' | 'Sell';
  accountId: string;
}

export function createOrder(orderRequest: OrderReqeust) {
  fetch(`${baseUrl}/api/Order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderRequest),
  });
}
