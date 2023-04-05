const Blockchain = require("./dist/index").default;
const chain = new Blockchain();

let start = Date.now();
while(chain.blocks.length < 10){
    chain.addTransaction(0, 1, 1);
    chain.addBlock();
    console.log(chain.getLastBlock(), chain.difficulty);
}
console.log(`На майнинг 10 блков ушло ${Date.now() - start} миллисекунд`);