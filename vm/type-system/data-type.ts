export type BaseType = typeof BASE_TYPE[number];
export type ArithmeticBitSize = typeof ARITHMETIC_BIT_SIZE[number];
export type ArithmeticSubType = typeof ARITHMETIC_SUB_TYPE[number];
export type ArithmeticType = `${ArithmeticSubType}${ArithmeticBitSize}`;
export const BASE_TYPE = ["address", "string", "bool"] as const;
export const ARITHMETIC_BIT_SIZE = 
    [
        "8",
        "16", 
        "24", 
        "32",
        "40", 
        "48", 
        "56",
        "64", 
        "72", 
        "80",
        "88", 
        "96",
        "104", 
        "112", 
        "120",
        "128", 
        "136", 
        "144",
        "152", 
        "160", 
        "168",
        "176", 
        "184", 
        "192",
        "200", 
        "208", 
        "216",
        "224", 
        "232", 
        "240",
        "248", 
        "256"
    ] as const;
export const ARITHMETIC_SUB_TYPE = ["uint", "int"] as const;
export const ARITHMETIC_TYPE = 
    (() => {
        const union: Array<string> = [... ARITHMETIC_SUB_TYPE];
        ARITHMETIC_SUB_TYPE.forEach(type => ARITHMETIC_BIT_SIZE.forEach(size => union.push(`${type}${size}`)));
        return (union);
    })();


