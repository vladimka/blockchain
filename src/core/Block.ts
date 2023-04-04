import { ITransaction } from "./Transaction";
import { createHash } from "crypto";
const sha256 = data => createHash('sha256').update(data).digest('hex');

export interface IBlock{
    id: number;
    timestamp: Date;
    transactions: Array<ITransaction>;
    proof: number;
    hash: string;
    prevHash: string;
}

export default class Block implements IBlock{
    id: number;
    timestamp: Date;
    transactions: ITransaction[];
    proof: number;
    hash: string;
    prevHash: string;
    
    constructor(id: number, transactions: Array<ITransaction>, proof: number, prevHash: string){
        this.id = id;
        this.timestamp = new Date(Date.now());
        this.transactions = transactions;
        this.proof = proof;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash(): string {
        return sha256(this.timestamp.toString() + this.transactions.toString() + this.prevHash);
    }
}