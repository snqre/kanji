import type {AbstractBinaryInterface} from "../type-system/abstract-binary-interface";
import type {Bytecode} from "../type-system/bytecode";

export type Deployment<T extends Array<unknown>> = {
    type: "deployment";
    bytecode: Bytecode;
    abstractBinaryInterface: AbstractBinaryInterface;
    args?: T;
    gasPrice?: bigint;
    gasLimit?: bigint;
    value?: bigint;
    chainId?: bigint;
    confirmations?: bigint;
};

export const Deployment = <T extends Array<unknown>>({
    bytecode,
    abstractBinaryInterface,
    args,
    gasPrice,
    gasLimit,
    value,
    chainId,
    confirmations}: Deployment<T>) => ({
        type: "deployment",
        bytecode,
        abstractBinaryInterface,
        args,
        gasPrice,
        gasLimit,
        value,
        chainId,
        confirmations
    });