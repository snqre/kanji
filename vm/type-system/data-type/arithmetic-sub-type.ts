export type ArithmeticSubType = "uint" | "int";

export function arithmeticSubType(): ReadonlyArray<string> {
    return ([
        "uint",
        "int"
    ]);
}