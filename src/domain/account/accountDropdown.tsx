import type { Account } from '../user/types';
import { useUser } from '../user/useUser';
interface AccountDropdownProps {
  userId: string;
  onSelectedAccount: (account: Account | undefined) => void;
  balance: number | undefined;
}

const AccountDropdown = ({ userId, onSelectedAccount, balance }: AccountDropdownProps) => {
  const { user } = useUser(userId);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundAccount = user?.accounts.find((account) => account.accountId === e.target.value);
    onSelectedAccount(foundAccount);
  };
  return (
    <div className="flex items-center gap-2">
      <label>accounts:</label>
      <select onChange={handleSelect}>
        <option value={'NULL'}>select Account</option>
        {user?.accounts.map((account) => {
          return (
            <option value={account.accountId} key={account.accountId}>
              {account.accountHolderName}
            </option>
          );
        })}
      </select>
      <div className="flex items-center justify-end w-full gap-2">
        <label>balance:{balance}</label>
      </div>
    </div>
  );
};

export default AccountDropdown;
