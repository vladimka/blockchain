import Block from "./Block";
import { ITransaction } from "./Transaction";
export default class Blockchain {
    blocks: Array<Block>;
    last_transactions: Array<ITransaction>;
    difficulty: number;
    blockTime: number;
    constructor();
    addBlock(): void;
    addTransaction(sender_id: any, recipient_id: any, amount: any): void;
    getLastBlock(): Block;
    isChainValid(): boolean;
}
