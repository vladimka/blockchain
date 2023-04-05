import Block from "./Block";
import { ITransaction } from "./Transaction";

export default class Blockchain{
    public blocks: Array<Block>;
    public last_transactions: Array<ITransaction>;
    public difficulty: number;
    public blockTime: number;

    constructor(){
        this.blocks = [
            new Block(0, [], '')
        ];
        this.last_transactions = [];
        this.difficulty = 1;
        this.blockTime = 3000;
    }

    addBlock(){
        let prevHash = this.getLastBlock().hash;
        let block = new Block(this.blocks.length, this.last_transactions, prevHash);
        block.mine(this.difficulty);
        this.blocks.push(block);
        this.last_transactions = [];
        this.difficulty += Date.now() - this.getLastBlock().timestamp < this.blockTime ? 1 : -1;
    }

    addTransaction(sender_id, recipient_id, amount){
        this.last_transactions.push({ sender_id, recipient_id, amount });
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    isChainValid(){
        for(let i = 1; i < this.blocks.length; i++){
            let block = this.blocks[i];
            let prevBlock = this.blocks[i - 1];

            if(block.hash != block.getHash())
                return false;

            if(block.prevHash != prevBlock.getHash())
                return false;
        }

        return true;
    }
}