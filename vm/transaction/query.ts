import type {ExternalPure} from "../type-system/sig/method";
import type {ExternalPureReturn} from "../type-system/sig/method";
import type {ExternalView} from "../type-system/sig/method";
import type {ExternalViewReturn} from "../type-system/sig/method";

export type Query<T extends Array<unknown>> = {
    type: "query";
    to: string;
    signature:
        | ExternalPure
        | ExternalPureReturn
        | ExternalView
        | ExternalViewReturn;
    args?: T;
};

export const Query = <T extends Array<unknown>>({
    to, 
    signature, 
    args}: Query<T>) => ({
        type: "query", 
        to, 
        signature, 
        args
    });