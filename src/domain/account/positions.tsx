import { useUser } from '../user/useUser';

interface PositionsProps {
  userId: string;
  selectedAccountId: string | undefined;
}

const Positions = ({ userId, selectedAccountId }: PositionsProps) => {
  const { user } = useUser(userId);
  const selectedAccount = user?.accounts.find((account) => account.accountId === selectedAccountId);
  return (
    <div>
      {selectedAccount?.positions?.map((item) => {
        return (
          <div key={item.symbol}>
            <p>{item.symbol}</p>
            <p>{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Positions;
