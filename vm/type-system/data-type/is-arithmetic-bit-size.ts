import type {ArithmeticBitSize} from "./";

export function isArithmeticBitSize(item: unknown): item is ArithmeticBitSize {
    if (typeof item !== "string") return false;
    switch (item) {
        case "8":
        case "16": case "24": case "32":
        case "40": case "48": case "56":
        case "64": case "72": case "80":
        case "88": case "96":
        case "104": case "112": case "120":
        case "128": case "136": case "144":
        case "152": case "160": case "168":
        case "176": case "184": case "192":
        case "200": case "208": case "216":
        case "224": case "232": case "240":
        case "248": case "256": return true;
        default: return false;
    }
}