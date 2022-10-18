import type { Predicate } from "../../types";
import Enumerable from "../base";

/**wrapper class for objects */
class SetEnumerable<T> extends Enumerable<T> {
    declare protected readonly internalEnumerable: Set<T>;

    public constructor(set: Set<T>) {
        super(set);
    }

    public count(): number;
    public count(predicate: Predicate<T>): number;
    public count(predicate?: Predicate<T>): number {
        return predicate ?
            super.count(predicate) :
            this.internalEnumerable.size;
    }

    public includes(elm: T): boolean {
        return this.internalEnumerable.has(elm);
    }

    public distinct(): Enumerable<T> {
        return this;
    }
}

export default SetEnumerable;