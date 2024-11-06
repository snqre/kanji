import type {ArithmeticBitSize} from ".";
import type {ArithmeticSubType} from ".";
import {arithmeticBitSize} from ".";
import {arithmeticSubType} from ".";

export type ArithmeticType = `${ArithmeticSubType}${ArithmeticBitSize}`;

export function arithmeticType() {
    return ([
        "uint",
        "uint8",
        "uint16",
        "uint32",
        "uint40",
        "uint48",
        "uint56",
        "uint64",
        "uint72",
        "uint80",
        "uint88",
        "uint96",
        "uint104",
        "uint112",
        "uint120",
        "uint128",
        "uint136",
        "uint144",
        "uint152",
        "uint160",
        "uint168",
        "uint176",
        "uint184",
        "uint192",
        "uint200",
        "uint208",
        "uint216",
        "uint224",
        "uint232",
        "uint240",
        "uint248",
        "uint256",
        "int",
        "int8",
        "int16",
        "int32",
        "int40",
        "int48",
        "int56",
        "int64",
        "int72",
        "int80",
        "int96",
        "int104",
        "int112",
        "int120",
        "int128",
        "int"
    ] as const);
}