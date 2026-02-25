import OrderHistory from './orderHistory';

interface OrderProps {
  userId: string;
  selectedAccountId: string | undefined;
}
const OrderPage = ({ userId, selectedAccountId }: OrderProps) => {
  return (
    <div className="bg-gray-400">
      <OrderHistory selectedAccountId={selectedAccountId} userId={userId} />
    </div>
  );
};

export default OrderPage;
