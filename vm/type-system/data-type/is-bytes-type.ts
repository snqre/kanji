import type {BytesType} from ".";
import {bytesType} from ".";

export function isBytesType(item: unknown): item is BytesType {
    if (typeof item !== "string") return false;
    return bytesType().includes((item));
}