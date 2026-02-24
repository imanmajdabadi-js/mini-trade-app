import { useUser } from '../user/useUser';

interface OrderHistoryProps {
  userId: string;
  selectedAccountId: string;
}
interface OrderProps {
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

const OrderHistory = ({ userId, selectedAccountId }: OrderHistoryProps) => {
  const { user } = useUser(userId);
  const x = user?.accounts.find((account) => account.accountId === selectedAccountId);

  // const abbas = [
  //   [
  //     {
  //       orderId: 'fcc67558-784e-4333-a994-fc1cfe349322',
  //       accountId: 'd1b8a7cb-e9af-4db2-8f7a-e38d8d49defa',
  //       symbol: 'AAPL',
  //       quantity: 40,
  //       side: 'Buy',
  //       status: 'Executed',
  //       createdAtUtc: '2026-02-24T07:16:17.7432555Z',
  //       executedAtUtc: '2026-02-24T07:16:24.6195011Z',
  //       cancelledAtUtc: null,
  //     },
  //   ],
  //   [
  //     {
  //       orderId: '64be7505-7f59-4841-9ea4-6d504502f834',
  //       accountId: '6b46fd5f-cdc5-4188-ae32-e9825b78f703',
  //       symbol: 'GOOGL',
  //       quantity: 1,
  //       side: 'Buy',
  //       status: 'Executed',
  //       createdAtUtc: '2026-02-24T08:23:12.4819541Z',
  //       executedAtUtc: '2026-02-24T08:23:17.6489363Z',
  //       cancelledAtUtc: null,
  //     },
  //   ],
  // ];
  return <div>sd</div>;
};

export default OrderHistory;
