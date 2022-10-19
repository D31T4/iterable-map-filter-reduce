import type { Predicate, uint } from "../../types";
import Enumerable from "../base";

import './extension';

/**wrapper class for objects */
class MapEnumerable<TKey, TValue> extends Enumerable<[TKey, TValue]> {
    declare protected readonly internalEnumerable: Map<TKey, TValue>;

    public constructor(dict: Map<TKey, TValue>) {
        super(dict);
    }

    public any(): boolean;
    public any(predicate: Predicate<[TKey, TValue]>): boolean;
    public any(predicate?: Predicate<[TKey, TValue]>): boolean {
        return predicate ?
            super.any(predicate) :
            this.internalEnumerable.size > 0;
    }

    public count(): uint;
    public count(predicate: Predicate<[TKey, TValue]>): uint;
    public count(predicate?: Predicate<[TKey, TValue]>): uint {
        return predicate ?
            super.count(predicate) :
            this.internalEnumerable.size;
    }

    public includesKey(key: TKey): boolean {
        return this.internalEnumerable.has(key);
    }

    public includes(elm: [TKey, TValue]): boolean {
        return this.includesKey(elm[0]) && 
            this.internalEnumerable.get(elm[0]) === elm[1];
    }

    public distinct(): MapEnumerable<TKey, TValue> {
        return this;
    }
}

export default MapEnumerable;