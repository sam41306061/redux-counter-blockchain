import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";

// state handler
import { authActions } from "../store/auth";
import { accountActions } from "../store/accounts";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const account = useSelector((state) => state.accounts.account);
  const balance = useSelector((state) => state.accounts.balance);
  console.log(account);
  console.log(balance);
  
  const connectHandler = async() => {
    dispatch(accountActions.account());
    dispatch(accountActions.balance());
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
              <a href='/' onClick={connectHandler}>Connect Account</a>
            </li>
            )}
            {balance ? (
              <li>
            <p><small>{balance}</small></p>
            </li>
            ):(
              <li>
            <p><small>THis is the balance</small></p>
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
