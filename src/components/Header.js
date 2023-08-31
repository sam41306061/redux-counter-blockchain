import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';

// state handler
import {authActions} from '../store/auth';
import { loadProvider,loadNetwork,loadAccount,loadBalance } from '../store/accounts';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const provider = useSelector(state => state.accounts.connection);
  const network = useSelector(state => state.accounts.chainId);
  const account = useSelector(state => state.accounts.account);
  const balance = useSelector(state => state.accounts.balance);

  const networkHandler = async (e) => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ network: e.target.value }],
    })
  }



  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
   }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
        <ul>
          <li>
            <a href='/'>Connect Account</a>
          </li>
          <li>
            <p><small>{Number(balance).toFixed(4)}</small></p>
          </li>
          {network && (
          <li>
            <button herf='' value={[network] ? `0x${network.toString(16)}` : `0`} onClick={networkHandler()}>Select Network</button>
          </li>
          )}
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
      
    </header>
  );
};

export default Header;
