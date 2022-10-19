import type { Predicate, uint } from "../../types";
import Enumerable from "../base";
import './extension';
/**wrapper class for objects */
declare class ArrayEnumerable<T> extends Enumerable<T> {
    protected readonly internalEnumerable: T[];
    constructor(array: T[]);
    any(): boolean;
    any(predicate: Predicate<T>): boolean;
    count(): uint;
    count(predicate: Predicate<T>): uint;
    first(): T | void;
    first(predicate: Predicate<T>): T | void;
    last(): T | void;
    last(predicate: Predicate<T>): T | void;
    reverse(): Enumerable<T>;
    skip(n: uint): Enumerable<T>;
}
export default ArrayEnumerable;
