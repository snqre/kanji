import type {ArithmeticBitSize} from ".";
import type {ArithmeticSubType} from ".";
import {arithmeticBitSize} from ".";
import {arithmeticSubType} from ".";

export type ArithmeticType = `${ArithmeticSubType}${ArithmeticBitSize}`;

export function arithmeticType(): ReadonlyArray<string> {
    const union: Array<string> = [... arithmeticSubType()];
    arithmeticSubType().forEach(subType => arithmeticBitSize().forEach(bitSize => union.push(`${subType}${bitSize}`)));
    return (union);
}