import type {ArithmeticType} from ".";
import type {ArrayType} from ".";
import type {BaseType} from ".";
import type {StructType} from ".";

export type AnyType =
    | ArithmeticType
    | ArrayType
    | BaseType
    | StructType;

/// Struct type is dynamic which means that every possible value cannot
/// be calculated at run time. The struct type is present in the type
/// but not in the runtime array.