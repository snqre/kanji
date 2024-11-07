import type {Bool} from "./";

export function isBool(item: unknown): item is Bool {
    if (typeof item !== "string") return false;
    if (item !== "bool") return false;
    return true;
}