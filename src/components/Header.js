import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';

// state handler
import {authActions} from '../store/auth';
import { loadAccount, loadBalance, loadProvider } from '../store/accounts';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const networkHandler = async (e) => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ network: e.target.value }],
    })
  }
  useEffect(() => {
    const initializeEthereum = async () => {
      try {
        // Load Ethereum-related data when the component mounts
        const connection = await dispatch(loadProvider());
        await dispatch(loadNetwork(connection));
        const account = await dispatch(loadAccount(connection));
  
        // You can access Ethereum-related data from the 'accounts' slice now
        console.log('Ethereum Data:', accounts);
      } catch (error) {
        console.error('Error loading Ethereum data:', error);
      }
    };

    initializeEthereum();
  }, [dispatch]);
  const connectHandler = async() =>{
  await loadAccount(connection, dispatch),
  await loadBalance (account, dispatch)
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
            {account ? (
              <li>
              <a href='/'>{account.slice(0,5) + '...' + account.slice(38,42)}</a>
            </li>
            ):(
              <li>
              <a href='/' onClick={connectHandler}>Connect Account</a>
            </li>
            )}
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
