import type {ArithmeticType} from ".";

export function isArithmeticType(item: unknown): item is ArithmeticType {
    if (typeof item !== "string") return false;
    switch (item) {
        case "uint":
        case "uint8":
        case "uint16": case "uint24": case "uint32":
        case "uint40": case "uint48": case "uint56": 
        case "uint64": case "uint72": case "uint80":
        case "uint88": case "uint96": case "uint104":
        case "uint112": case "uint120": case "uint128":
        case "uint136": case "uint144": case "uint152":
        case "uint160": case "uint168": case "uint176":
        case "uint184": case "uint192": case "uint200":
        case "uint208": case "uint216": case "uint224":
        case "uint232": case "uint240": case "uint248":
        case "uint256":
        case "int":
        case "int8":
        case "int16": case "int24": case "int32":
        case "int40": case "int40": case "int56":
        case "int64": case "int72": case "int80":
        case "int88": case "int96": case "int104":
        case "int112": case "int120": case "int128":
        case "int136": case "int144": case "int152":
        case "int160": case "int168": case "int176":
        case "int184": case "int192": case "int200":
        case "int208": case "int216": case "int224":
        case "int232": case "int240": case "int248":
        case "int256": return true;
        default: return false;
    }
}