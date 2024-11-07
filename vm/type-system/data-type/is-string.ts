import type {String} from ".";

export function isString(item: unknown): item is String {
    if (typeof item !== "string") return false;
    if (item !== "string") return false;
    return true;
}