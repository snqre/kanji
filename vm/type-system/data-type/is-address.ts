import type {Address} from "./";

export function isAddress(item: unknown): item is Address {
    if (typeof item !== "string") return false;
    if (item !== "address") return false;
    return true;
}