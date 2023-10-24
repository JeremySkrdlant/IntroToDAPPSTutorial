## Learning about the full Stack of a DAPP
We will be looking at a simple faucet. It is really simple.  It gives money out to anyone who asks and will give multiple times. To improve it, you might put in a time limit based on the addresses that already recieved money.  You might also put in a amount limit for each request. 

It is just play money though.  You will  never see a faucet on Ethereum main net.  These are tools that exist on test networks that allow you to get test ether to try your contracts out.  

## Step 1 - Install Packages
```
cd simpleFaucetContract 
npm install 
cd ../faucetFrontend
npm install 
ng serve -o
```

## Step 2 - Deploy your Contract
We will start by compiling our contract 
```
npx hardhat compile
``` 

Next we will start the network
```
npx harhat node
```

Start up a new terminal and run the script that deploys our faucet contract. 
```
npx hardhat run ./scripts/deploy.ts
```

## Step 3 - Setup your Wallet
Make sure you have metamask installed in your browser. 
https://metamask.io/ 

Create a new wallet if you need to.  Go under the networks tab and choose **Add Network** and then choose **Add Network Manually**

* Network name can be anything you want
* New RPC URL is **http://127.0.0.1:8545** 
* Chain ID is **31337** 
* Currency Symbol can be anything you want

Press save and switch to that network. 
