import type {Uint} from "./";

export function isUint(item: unknown): item is Uint {
    if (typeof item !== "string") return false;
    switch (item) {
        case "uint":
        case "uint8":
        case "uint16": case "uint24": case "uint32":
        case "uint40": case "uint48": case "uint56":
        case "uint64": case "uint72": case "uint80":
        case "uint88": case "uint96":
        case "uint104": case "uint112": case "uint120":
        case "uint128": case "uint136": case "uint144":
        case "uint152": case "uint160": case "uint168":
        case "uint176": case "uint184": case "uint192":
        case "uint200": case "uint208": case "uint216":
        case "uint224": case "uint232": case "uint240":
        case "uint248": case "uint256": return true;
        default: return false;
    }
}