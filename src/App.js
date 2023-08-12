// dont need to add hardhat exstension
import {ethers} from 'ethers';
import Counter from './components/Counter';
import React, {useEffect} from 'react';


  function App() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const connectWallet = async() => {
      try {
        const { ethers } = window;
        if(typeof window.ethers === 'undefined'){
          alert('Please Install MetaMask in chrome');
        }
        const accounts = await ethers.request({
          method: 'eth_requestAccounts',
        });
        console.log('Connected', accounts[0], signer);
      } catch(error) {
        console.log('Could not connect to your wallet', error);
      }
    };

    useEffect(() => {
      // Access the current wallet address
      async function getWalletAddress() {
        try {
          const address = await signer.getAddress();
          console.log('Connected wallet address:', address);
        } catch (error) {
          console.log('Could not connect to your wallet', error);
        }
      }
  
      getWalletAddress();
    }, []);
  return (
    <Counter />
  );
}


export default App;
