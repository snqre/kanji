import type {Bytes} from ".";

export function isBytes(item: unknown): item is Bytes {
    if (typeof item !== "string") return false;
    switch (item) {
        case "bytes1": case "bytes2": case "bytes3":
        case "bytes4": case "bytes5": case "bytes6":
        case "bytes7": case "bytes8": case "bytes9":
        case "bytes10": case "bytes11": case "bytes12":
        case "bytes13": case "bytes14": case "bytes15":
        case "bytes16": case "bytes17": case "bytes18":
        case "bytes19": case "bytes20": case "bytes21":
        case "bytes22": case "bytes23": case "bytes24":
        case "bytes25": case "bytes26": case "bytes27":
        case "bytes28": case "bytes29": case "bytes30":
        case "bytes31": case "bytes32": return true;
        default: return false;
    }
}