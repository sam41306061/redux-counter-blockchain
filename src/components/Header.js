import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import config from './config.json';

// state handler
import { authActions } from "../store/auth";
import { accountActions } from "../store/accounts";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const account = useSelector((state) => state.accounts.account);
  const balance = useSelector((state) => state.accounts.balance);
  const chainId = useSelector((state) => state.accounts.chainId);
  
  const connectHandler = async() => {
    dispatch(accountActions.account());
  }

  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
          {account ? (
              <li>
              <a href='/'>{account.slice(0,5) + '...' + account.slice(38,42)}</a>
            </li>
            ):(
              <li>
              <a href={config[chainId] ? `${config[chainId].explorerURL}/address/${account}` : `#`} onClick={connectHandler}>Connect Account</a>
            </li>
            )}
           {balance ? (
          <p><small>My Balance <br /></small>{balance}</p>
        ) : (
          <p><small>My Balance</small>0 ETH</p>
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
