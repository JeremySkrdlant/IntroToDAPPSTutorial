import { Injectable } from '@angular/core';
import { BrowserProvider, ethers } from 'ethers';
import { abi } from './abi';

declare global{
  interface Window{
    ethereum:any
  }
}

@Injectable({
  providedIn: 'root'
})

export class FaucetService {
  provider?:BrowserProvider;
  signer?:ethers.JsonRpcSigner;
  contractAddress = ""; 

  constructor() { }
  

  async connectWallet(){
    if(window.ethereum ){
      //The provider is the blockchain, this could be ethereum, polygon, localhost, or any other network. 
      this.provider = new ethers.BrowserProvider(window.ethereum);
      //This gets the current wallets signer to request functions that cost gas. 
      this.signer = await this.provider.getSigner();
    }
  }

  async request20Eth(){
    //We create a new contract with 3 parameters
    //Where is the contract located?
    //What functions can we call on this contract 
    //Who is allowed to pay gas on these calls. 
    let contract = new ethers.Contract(this.contractAddress, abi, this.signer!); 

    //We are calling the requestFundsInEth function from the contract. We are passing 
    //in 20 ether. 
    contract["requestFundsInEth"](20); 
  }
}

