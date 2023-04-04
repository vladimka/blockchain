const Blockchain = require("./dist/index").default;
const chain = new Blockchain();

chain.addTransaction(1,2,100);
chain.addBlock(0);
chain.addTransaction(1,2,100);
chain.addBlock(0);

chain.chain.forEach(block => {
    console.log('Block ID: ' + block.id);
    console.log('Hash: ' + block.hash);
    console.log('Prev Hash: ' + block.prevHash);
    console.log('Transactions:\n' + JSON.stringify(block.transactions, null, '\t'));
});