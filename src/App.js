import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

// remove after testing
import { ethers } from 'ethers';

// local compoents 
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const loadBlockChainData = async() =>  {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    console.log(accounts[0]);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    console.log(network.chainId);
  }
  useEffect(() => {
    loadBlockChainData();
  })
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
