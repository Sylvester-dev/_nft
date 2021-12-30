# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
First, we're going to get all our NFT data on-chain. Our NFT is simply going to be a box with a funny three-word combo at the center. Just like the SVG above. We're going to hardcode the SVG above in our contract that says "EpicLordHamburger".
After that, we're going to learn how to dynamically generate these NFTs on our contract. So, every time someone mints an NFT they'll get a different, hilarious three-word combo. 

We will encode our SVG into base64 and find it by data:image/svg+xml;base64,INSERT_YOUR_BASE64_ENCODED_SVG_HERE
Converter -> https://www.utilities-online.info/base64

We will also encode/host our json metadata into base64 so it is also permanently secure

Tool " https://nftpreview.0xdev.codes/ " to see a quick preview of the image and the contents of the json without deploying it again and again on the opensea testnet.

frontend -> https://replit.com/@3lv/nft-starter-project#src/App.jsx