import type { Account } from '../../types';
import OrderPage from '../order';
import AccountDropdown from './accountDropdown';
import Positions from './positions';

interface AccountProps {
  selectedAccount: Account | undefined;
  onSelectedAccount: (account: Account | undefined) => void;
}

const AccountPage = ({ selectedAccount, onSelectedAccount }: AccountProps) => {
  const handleSelectedAccount = (account: Account | undefined) => {
    onSelectedAccount(account);
  };
  return (
    <>
      <AccountDropdown
        balance={selectedAccount?.balance}
        onSelectedAccount={handleSelectedAccount}
        userId="431de787-de7f-43dd-b36b-063fa60d9f31"
      />
      <Positions
        selectedAccountId={selectedAccount?.accountId}
        userId="431de787-de7f-43dd-b36b-063fa60d9f31"
      />

      <OrderPage
        selectedAccountId={selectedAccount?.accountId}
        userId="431de787-de7f-43dd-b36b-063fa60d9f31"
      />
    </>
  );
};

export default AccountPage;
