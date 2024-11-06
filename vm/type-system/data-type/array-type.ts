import type {ArithmeticType} from ".";
import type {BytesType} from ".";
import type {BaseType} from ".";
import {arithmeticType} from ".";
import {bytesType} from ".";
import {baseType} from ".";

export type ArrayType = 
    | `${ArithmeticType | BytesType | BaseType}[]`
    | `${ArithmeticType | BytesType | BaseType}[][]`;

export function arrayType(): ReadonlyArray<string> {
    const union: Array<string> = [];
    const compounds: ReadonlyArray<string> =
        [
            ... arithmeticType(),
            ... bytesType(),
            ... baseType()
        ];
    compounds.forEach(type => union.push(`${type}[]`));
    compounds.forEach(type => union.push(`${type}[][]`));
    return (union);
}