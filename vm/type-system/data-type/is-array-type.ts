import type {ArrayType} from ".";
import {arrayType} from ".";

export function isArrayType(item: unknown): item is ArrayType {
    if (typeof item !== "string") return false;
    return arrayType().includes((item));
}