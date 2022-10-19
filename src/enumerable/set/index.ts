import type { Predicate, uint } from "../../types";
import Enumerable from "../base";

import './extension';

/**wrapper class for objects */
class SetEnumerable<T> extends Enumerable<T> {
    declare protected readonly internalEnumerable: Set<T>;

    public constructor(set: Set<T>) {
        super(set);
    }

    public any(): boolean;
    public any(predicate: Predicate<T>): boolean;
    public any(predicate?: Predicate<T>): boolean {
        return predicate ?
            super.any(predicate) :
            this.internalEnumerable.size > 0;
    }

    public count(): uint;
    public count(predicate: Predicate<T>): uint;
    public count(predicate?: Predicate<T>): uint {
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