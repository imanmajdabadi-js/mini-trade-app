import { useState } from 'react';
import OrderPage from '../order';
import type { Account } from '../user/types';
import AccountDropdown from './accountDropdown';
import Positions from './positions';

const AccountPage = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>();
  const handleSelectedAccount = (account: Account | undefined) => {
    setSelectedAccount(account);
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
