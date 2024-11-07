import type {BaseType} from ".";


const _isType: Readonly<Record<string, true | undefined>> = {address: true, string: true, bool: true};

export const isBaseType = (item: unknown): item is BaseType => (typeof item === "string" && _isType[item] === true);