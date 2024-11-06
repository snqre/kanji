import type {TransactionReceipt} from "ethers";
import type {Transaction} from "./transaction";
import type {Unsafe} from "kyudo";

export type Account = {
    address(): Promise<string>;
    nonce(): Promise<bigint>;
    nextNonce(): Promise<bigint>;
    send<T extends Array<unknown>>(transaction: Transaction<T>): Promise<TransactionReceipt | Unsafe>;
};