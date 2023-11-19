import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// remove after testing
import { ethers } from 'ethers';

// local compoents 
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { loadAccount, loadBalance, loadNetwork, loadProvider } from './store/accounts';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  // const loadBlockChainData = async() => {
  
  //  const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //   console.log(accounts[0]);
  //   const account = accounts[0];
  //   const balance = await provider.getBalance(account);
  //   console.log(balance);
  //   const hexBalance = balance;
  //   const decimalBalance = parseInt(hexBalance, 16);
  //   console.log(decimalBalance);
  // }
  
  useEffect(() => {
    // loadBlockChainData();
    dispatch(loadProvider());
    dispatch(loadNetwork());
    dispatch(loadAccount());
    dispatch(loadBalance())
  },[dispatch])
  return (
    <Fragment>
       <Header/> 
     {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
   
  );
}


export default App;
