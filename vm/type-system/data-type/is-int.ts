import type {Int} from "./";

export function isInt(item: unknown): item is Int {
    if (typeof item !== "string") return false;
    switch (item) {
        case "int":
        case "int8":
        case "int16": case "int24": case "int32":
        case "int40": case "int48": case "int56":
        case "int64": case "int72": case "int80":
        case "int88": case "int96":
        case "int104": case "int112": case "int120":
        case "int128": case "int136": case "int144":
        case "int152": case "int160": case "int168":
        case "int176": case "int184": case "int192":
        case "int200": case "int208": case "int216":
        case "int224": case "int232": case "int240":
        case "int248": case "int256": return true;
        default: return false;
    }
}