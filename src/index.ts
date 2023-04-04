import { createHash } from "crypto";
const sha256 = data => createHash('sha256').update(data).digest('hex');

interface Transaction{
    sender_id: number;
    recipient_id: number;
    amount: number;
}

interface Block{
    id: number;
    timestamp: Date;
    transactions: Array<Transaction>;
    proof: number;
    hash: string;
    prevHash: string;
}

export default class Blockchain{
    public chain: Array<Block>;
    public last_transactions: Array<Transaction>;

    constructor(){
        this.chain = [];
        this.last_transactions = [];

        this.addBlock(0, "");
    }

    addBlock(proof, _prevHash?){
        let prevHash = _prevHash != undefined ? _prevHash : this.chain[this.chain.length - 1].hash;
        let timestamp = new Date(Date.now());
        let hash = sha256(timestamp.toString() + this.last_transactions.toString() + prevHash);

        let block: Block = {
            timestamp, hash, prevHash, proof,
            id : this.chain.length + 1,
            transactions : this.last_transactions
        }

        this.last_transactions = [];
        this.chain.push(block);
    }

    addTransaction(sender_id, recipient_id, amount){
        this.last_transactions.push({ sender_id, recipient_id, amount });
    }
}