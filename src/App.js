import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// remove after testing
// import { ethers } from 'ethers';

// local compoents 
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { loadAccount,loadProvider,loadNetwork, loadBalance } from './store/accounts';

// ethers

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const account = useSelector(state => state.accounts.account);
  

  const loadBlockChainData = async () => {
    try {
      const provider = dispatch(loadProvider());
      const account =  await dispatch(loadAccount());
      const network = await dispatch(loadNetwork());
      const balance = await dispatch(loadBalance());
    } catch(error){
      console.error('Error Loading Accout', error);
    }
  }


  useEffect(() => {
    loadBlockChainData();
  },[])
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
