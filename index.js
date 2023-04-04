const Blockchain = require("./dist/index").default;
const chain = new Blockchain();

chain.addTransaction(1,2,100);
chain.addBlock(0);
chain.addTransaction(1,2,100);
chain.addBlock(0);
console.log(chain.blocks, chain.isChainValid());