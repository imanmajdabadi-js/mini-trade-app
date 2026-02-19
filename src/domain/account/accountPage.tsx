import AccountDropdown from './accountDropdown';
import Positions from './positions';

const AccountPage = () => {
  return (
    <>
      <AccountDropdown userId="431de787-de7f-43dd-b36b-063fa60d9f31" />
      <Positions quantity={10} symbol="AApl" userId="431de787-de7f-43dd-b36b-063fa60d9f31" />
    </>
  );
};

export default AccountPage;
