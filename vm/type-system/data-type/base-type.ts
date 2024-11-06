export type BaseType = "address" | "string" | "bool";

export function baseType(): ReadonlyArray<BaseType> {
    return (["address", "string", "bool"]);
}