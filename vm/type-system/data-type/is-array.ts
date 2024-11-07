import type {Array as Array_} from "./index";
import type {Maybe} from "kyudo";
import {isAddress} from "./";
import {isArithmetic} from "./";
import {isBool} from "./";
import {isBytes} from "./";
import {isString} from "./";

export function isArray(item: unknown): item is Array_ {
    if (typeof item !== "string") return false;
    const tkns: Array<string> = item.split("");
    const lastTkn1: Maybe<string> = tkns.at(-1);
    const lastTkn2: Maybe<string> = tkns.at(-2);
    const lastTkn3: Maybe<string> = tkns.at(-3);
    const lastTkn4: Maybe<string> = tkns.at(-4);
    if (lastTkn1 !== "]") return false;
    if (lastTkn2 !== "[") return false;
    const nested: boolean = lastTkn3 === "]" && lastTkn4 === "[";
    const cutoff: bigint = nested 
        ? BigInt(tkns.length - 4) 
        : BigInt(tkns.length - 2);
    tkns.splice(Number(cutoff), nested ? 4 : 2);
    const type: string = tkns.join("");
    return (
        isAddress(type)
        || isArithmetic(type)
        || isBool(type)
        || isBytes(type)
        || isString(type)
    );
}

console.log(isArray("address[]"));