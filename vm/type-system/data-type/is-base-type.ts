import type {BaseType} from ".";

const _isBaseType: {[key: string]: true | undefined} = {
    address: true,
    string: true,
    bool: true
};

export function isBaseType(item: unknown): item is BaseType {
    if (typeof item !== "string") return false;
    return (_isBaseType[item] === true);
}