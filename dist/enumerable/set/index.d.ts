import type { Predicate } from "../../types";
import Enumerable from "../base";
/**wrapper class for objects */
declare class SetEnumerable<T> extends Enumerable<T> {
    protected readonly internalEnumerable: Set<T>;
    constructor(set: Set<T>);
    count(): number;
    count(predicate: Predicate<T>): number;
    includes(elm: T): boolean;
    distinct(): Enumerable<T>;
}
export default SetEnumerable;
