import type {Arithmetic} from ".";
import {isUint} from ".";
import {isInt} from ".";

export function isArithmetic(item: unknown): item is Arithmetic {
    return isUint(item) || isInt(item);
}