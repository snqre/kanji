import type {BaseType} from ".";
import {baseType} from ".";

export function isBaseType(item: unknown): item is BaseType {
    if (typeof item !== "string") return false;
    return baseType().includes((item as any));
}