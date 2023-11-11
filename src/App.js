import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// remove after testing
import { ethers } from 'ethers';

// local compoents 
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'


function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  // const loadBlockChainData = async () => {
  //   try {
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const network = await provider.getNetwork();

  //     dispatch(accountActions.providerLoaded({ connection: provider }));
  //     dispatch(accountActions.networkLoaded({ chainId: network.chainId }));
  //     dispatch(accountActions.accountLoaded({ account: accounts[0] }));

  //     console.log(provider);
  //     console.log(network.chainId);
  //     console.log(account.selectedAddress);
  //   } catch (error) {
  //     console.error("Error loading blockchain data:", error);
  //   }
  // };
  // useEffect(() => {
  //   loadBlockChainData();
  // },[])
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
