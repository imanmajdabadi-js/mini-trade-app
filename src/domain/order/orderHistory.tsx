import { useUser } from '../user/useUser';

interface OrderHistoryProps {
  userId: string;
  selectedAccountId: string | undefined;
}

const OrderHistory = ({ userId, selectedAccountId }: OrderHistoryProps) => {
  const { user } = useUser(userId);
  const selectedAccountOrder = user?.accounts.find(
    (account) => account.accountId === selectedAccountId
  );

  return (
    <div>
      {selectedAccountOrder?.orders?.map((order) => {
        return (
          <div className="w-full bg-sky-700">
            <p>{order.quantity}</p>
            <p>{order.symbol}</p>
            <p>{order.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;
