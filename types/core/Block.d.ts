import { ITransaction } from "./Transaction";
export interface IBlock {
    id: number;
    timestamp: number;
    transactions: Array<ITransaction>;
    proof: number;
    hash: string;
    prevHash: string;
}
export default class Block implements IBlock {
    id: number;
    timestamp: number;
    transactions: ITransaction[];
    proof: number;
    hash: string;
    prevHash: string;
    constructor(id: number, transactions: Array<ITransaction>, prevHash: string);
    getHash(): string;
    mine(difficulty?: number): void;
}
