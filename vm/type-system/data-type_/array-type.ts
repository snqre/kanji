import type {ArithmeticType} from ".";
import type {BytesType} from ".";
import type {BaseType} from ".";

export type ArrayType = 
    | `${ArithmeticType | BytesType | BaseType}[]`
    | `${ArithmeticType | BytesType | BaseType}[][]`;