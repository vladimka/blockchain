import Block from "./Block";
import { ITransaction } from "./Transaction";

export default class Blockchain{
    public blocks: Array<Block>;
    public last_transactions: Array<ITransaction>;

    constructor(){
        this.blocks = [];
        this.last_transactions = [];

        this.addBlock(0, "");
    }

    addBlock(proof, _prevHash?){
        let prevHash = _prevHash == undefined ? this.blocks[this.blocks.length - 1].hash : _prevHash;
        this.blocks.push(new Block(this.blocks.length, this.last_transactions, proof, prevHash));
        this.last_transactions = [];
    }

    addTransaction(sender_id, recipient_id, amount){
        this.last_transactions.push({ sender_id, recipient_id, amount });
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