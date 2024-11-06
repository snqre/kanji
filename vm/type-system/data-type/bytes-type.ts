import type {BytesBitSize} from ".";
import type {BytesSubType} from ".";
import {bytesBitSize} from ".";
import {bytesSubType} from ".";

export type BytesType = `${BytesSubType}${BytesBitSize}`;

export function bytesType(): ReadonlyArray<string> {
    const union: Array<string> = [... bytesSubType()];
    bytesSubType().forEach(baseType => bytesBitSize().forEach(bitSize => union.push(`${baseType}${bitSize}`)));
    return (union);
}