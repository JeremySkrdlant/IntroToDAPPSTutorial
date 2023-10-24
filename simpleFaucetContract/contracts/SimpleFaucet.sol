// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


contract SimpleFaucet {
    //The first person to create this contract is the owner. 
    constructor() {}

    //This allows us to send money to the contract 
    function addToDispersableFunds() public payable {}

    function requestFundsInEth(uint amount)public {
        //We convert the amount by addint 18 decimals. 
        //1 would become 1000000000000000000 
        //This is the wei amount in 1 ether. 
        uint weiValue = amount * 10 ** 18; 

        //You can not get more from the faucet than is available
        require(weiValue <= address(this).balance, "You are requesting more than we have.");

        //We need to make the person who called this payable. 
        //Then we send them the amount they requested using the transfer 
        //function. 
        payable(msg.sender).transfer(weiValue); 
    }
}


