# BlockChain-Beginner (Ethereum only)
**What is Blockchain?**

A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.

Blogs -Which gave you a Quick Review:

    https://www.investopedia.com/terms/b/blockchain.asp
    https://www.ibm.com/ae-en/topics/what-is-blockchain
    https://www.euromoney.com/learning/blockchain-explained/what-is-  blockchain#:~:text=Blockchain%20is%20a%20system%20of,hack%2C%20or%20cheat%20the%20system.&text=Each%20block%20in%20the%20chain,added%20to%20every%20participant's%20ledger.

## Step to Build Some Dapp Like ToDoApp on Private Ganache BlockChain
    
    DBlock_Apps : https://github.com/HerculesVirus/BlockChain_Todo_app
  
  Blogs -Which gave you a Quick Guide to make your first Dapp:
  
    https://www.dappuniversity.com/articles/ethereum-dapp-react-tutorial
    
    https://www.dappuniversity.com/articles/blockchain-app-tutorial

## Step to Learn How Live Blockchain Like BSC,Ropstan,Rinkeby and TestNet are Working and How the Smart Contract Deploy on it. 
These are Quick Blogs Which Might give a Quick Review
  
  Blogs -Which gave you a Quick Review:
  
    https://medium.com/coinmonks/the-many-ways-to-deploy-your-smart-contract-to-rinkeby-network-38cadf7b20be
    
    https://bmshamsnahid.medium.com/deploy-your-first-smart-contract-in-ethereum-network-3b70ca6ed544
    
    https://www.geeksforgeeks.org/deploying-smart-contract-on-test-main-network-using-truffle/amp/
    
    https://itnext.io/deploying-smart-contracts-to-binance-smart-chain-with-truffle-c57a7d1eb6ed


  
## Learn About the Event in a Smart Contract contain of and there working.
  
  Blogs -Which gave you a Quick Review:
  
    https://www.pauric.blog/How-to-Query-and-Monitor-Ethereum-Contract-Events-with-Web3/
    
    https://www.coinclarified.com/p/3-ways-to-subscribe-to-events-with-web3-js/

## Learn About ERC-721 which is Standard Non-Fungible owner Token 

    Docs : https://docs.openzeppelin.com/contracts/2.x/api/token/erc721

### Centralize a decentralize app

<!--@octocat :+1: This PR looks great - it's ready to merge! :shipit:-->

Like we’ve just seen, the end users will need Metamask to perform writing actions on the blockchain but reading is free.

So one solution is to centralize a decentralized application (crazy talk, I know) that will read and save your smart contract data into a database. You’ll get the data (slowly) from the blockchain to serve it (quickly) to your users through your scaled API.

The benefits of using a Smart contracts is that it can emit event, like: `emit Pokemon Transfer({ from: 0XO67465, to: 0x43546})` or `emit Pokemon Birth({name: Nidoran })`.

So when you receive a `Birth` event (means someone called the `createPokemon()` function), you can add a new Pokemon to your database to better serve your users.

And when you receive a `Transfert` event, (means someone called the `buy()` function) you can update the owner of the given Pokemon in your database. And you can listen to this events with web3.js !


![GitHub Light](https://user-images.githubusercontent.com/31464210/150289551-b6f2e60d-81b3-4b26-babf-62b045b3e37a.png)

### Server Architecture


![another](https://github.com/github-dark.png#gh-light-mode-only/user-images.githubusercontent.com/31464210/150289482-e8bf737a-0b3f-4dcf-8ec7-88774c82c861.png)

### Conclusion

If you want to create a crypto collectible market place on Ethereum you need to know that:

The blockchain is slow and you can’t ask your front-end app to fetch and cook the data for every single request. One solution is to create an event processor to listen to your smart contract events and populate data into a database that would be a mirror of the blockchain. You’ll then be able to serve the data through an API.

Metamask is mandatory and it can be scary for your users. Make sure to provide a good user experience and introduce Metamask usages to your users.



