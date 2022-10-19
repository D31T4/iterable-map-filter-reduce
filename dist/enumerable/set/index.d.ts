import type { Predicate, uint } from "../../types";
import Enumerable from "../base";
import './extension';
/**wrapper class for objects */
declare class SetEnumerable<T> extends Enumerable<T> {
    protected readonly internalEnumerable: Set<T>;
    constructor(set: Set<T>);
    any(): boolean;
    any(predicate: Predicate<T>): boolean;
    count(): uint;
    count(predicate: Predicate<T>): uint;
    includes(elm: T): boolean;
    distinct(): Enumerable<T>;
}
export default SetEnumerable;
