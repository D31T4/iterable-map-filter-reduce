import type { Predicate } from "../../types";
import Enumerable from "../base";
/**wrapper class for objects */
declare class ArrayEnumerable<T> extends Enumerable<T> {
    protected readonly internalEnumerable: T[];
    constructor(array: T[]);
    count(): number;
    count(predicate: Predicate<T>): number;
    first(): T | void;
    first(predicate: Predicate<T>): T | void;
    last(): T | void;
    last(predicate: Predicate<T>): T | void;
    reverse(): Enumerable<T>;
    skip(n: number): Enumerable<T>;
}
export default ArrayEnumerable;
