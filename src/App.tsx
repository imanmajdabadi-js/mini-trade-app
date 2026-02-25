import { useState } from 'react';
import SideBar from './components/Sidebar';
import AccountPage from './domain/account/accountPage';
import Stock from './domain/stock';
import UserPage from './domain/user';
import type { Account } from './types';

function App() {
  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>();

  const handleSelectedAccount = (account: Account | undefined) => {
    setSelectedAccount(account);
  };
  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 bg-gray-200 p-4">
          <UserPage />
          <AccountPage
            selectedAccount={selectedAccount}
            onSelectedAccount={handleSelectedAccount}
          />

          <Stock selectedAccountId={selectedAccount?.accountId} />
        </main>
        <footer className="bg-indigo-500 p-2 w-full text-white">footer</footer>
      </div>
    </div>
  );
}

export default App;
