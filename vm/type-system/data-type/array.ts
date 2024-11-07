import type {Arithmetic} from "./";
import type {Bytes} from "./";
import type {Address} from "./";
import type {Bool} from "./";
import type {String} from "./";

export type Array =
    | `${Arithmetic | Bytes | Address | Bool | String}[]`
    | `${Arithmetic | Bytes | Address | Bool | String}[][]`;