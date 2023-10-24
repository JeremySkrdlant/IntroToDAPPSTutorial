import { ethers } from "hardhat";

async function main() {

  const faucet = await ethers.deployContract("SimpleFaucet"); 
  await faucet.waitForDeployment();

  const [owner, depositor1, depositor2] = await ethers.getSigners();
  await faucet.addToDispersableFunds({value: ethers.parseEther("99")});
  await faucet.connect(depositor1).addToDispersableFunds({value: ethers.parseEther("99")});
  await faucet.connect(depositor2).addToDispersableFunds({value:ethers.parseEther("99")});
  let amount = await ethers.provider.getBalance(faucet.getAddress());
  let address = await faucet.getAddress();

  //send money to yourself here. 
  // const tx = await owner.sendTransaction({
  //   to: '',
  //   value: ethers.parseEther('0.1'),
  // });

  console.log(
    `Faucet deployed to ${address} with a balance of ${amount} Wei`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
