import type {ArithmeticType} from ".";
import {arithmeticType} from ".";

export function isArithmeticType(string: string): string is ArithmeticType {
    return arithmeticType().includes(string);
}