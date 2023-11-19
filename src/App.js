import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// local compoents 
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { loadAccount, loadBalance, loadNetwork, loadProvider } from './store/accounts';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const loadBlockChainData = async() =>{
    window.ethereum.on('accountsChanged', () => {
      dispatch(loadAccount());
      dispatch(loadBalance());
    })
  }
  useEffect(() => {
    loadBlockChainData();
    dispatch(loadProvider());
    dispatch(loadNetwork());
    dispatch(loadAccount());
    dispatch(loadBalance())
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
