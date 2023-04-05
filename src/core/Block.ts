import { ITransaction } from "./Transaction";
import { createHash } from "crypto";
const sha256 = data => createHash('sha256').update(data).digest('hex');

export interface IBlock{
    id: number;
    timestamp: number;
    transactions: Array<ITransaction>;
    proof: number;
    hash: string;
    prevHash: string;
}

export default class Block implements IBlock{
    id: number;
    timestamp: number;
    transactions: ITransaction[];
    proof: number;
    hash: string;
    prevHash: string;
    
    constructor(id: number, transactions: Array<ITransaction>, prevHash: string){
        this.id = id;
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.proof = 0;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash(): string {
        return sha256(this.timestamp.toString() + this.transactions.toString() + this.prevHash + this.proof);
    }

    mine(difficulty: number = 0){
        while(!this.hash.startsWith(Array(difficulty + 1).join("0"))){
            this.proof++;
            this.hash = this.getHash();
        }
    }
}