import type {AnyType} from ".";
import {anyType} from ".";

export function isAnyType(item: unknown): item is AnyType {
    if (typeof item !== "string") return false;
    item = 
        item
            .split(",")
            .map(_process)
            .join(",");
    const parsed: Array<string> = JSON.parse(`[${item}]`);
    let i: bigint = 0n;
    while (i < parsed.length) {
        const tkn: string = parsed[Number(i)];
        if (!Array.isArray(tkn) && !anyType().includes(tkn)) return false;
        
    }

    console.log(parsed);
}

export function validate(item: string | DataType.Any.Type[] | Array<unknown>): item is Type {
    if (typeof item === "string") {
        if (!item.startsWith("[")) return false;
        if (!item.endsWith("]")) return false;
        item = item.slice(1, item.length - 1);
        const shards: Array<string> = item.split(",");
        item =
            shards
                .map(_process)
                .join(",");
        const parsed: Array<unknown> = JSON.parse(`[${item}]`);
        return validate(parsed);
    }
    item.forEach(type => {
        if (validate(type))
        console.log(type);
    });
}

function _process(item: string): string {
    const isStruct: boolean = item.startsWith("[") && item.endsWith("]");
    if (!isStruct) return _wrapInQuote(item.trim());
    const innerItems: Array<string> = 
        item
            .slice(1, -1)
            .split(",");
    const wrappedInnerItems: Array<string> = innerItems.map(_process);
    return (`[${wrappedInnerItems.join(",")}]`);
}

function _wrapInQuote(item: string): string {
    return (`"${item}"`);
}

const result = isAnyType("[uint256]");

console.log(result);