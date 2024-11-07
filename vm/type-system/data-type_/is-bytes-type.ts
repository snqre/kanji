import type {BytesType} from ".";

const _isType: Readonly<Record<string, true | undefined>> = Object.fromEntries(Array.from({length: 32}, (_, i) => [`bytes${i + 1}`, true]));

export const isBytesType = (item: unknown): item is BytesType => (typeof item === "string" && _isType[item] === true);