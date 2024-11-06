import type {Method} from "./sig/method";
import type {Error} from "./sig";
import type {Event} from "./sig";

export type AbstractBinaryInterface = 
    (
        | Method
        | Error
        | Event
    )[];