import type { Predicate, uint } from "../../types";
import Enumerable from "../base";
import './extension';
/**wrapper class for objects */
declare class MapEnumerable<TKey, TValue> extends Enumerable<[TKey, TValue]> {
    protected readonly internalEnumerable: Map<TKey, TValue>;
    constructor(dict: Map<TKey, TValue>);
    any(): boolean;
    any(predicate: Predicate<[TKey, TValue]>): boolean;
    count(): uint;
    count(predicate: Predicate<[TKey, TValue]>): uint;
    includesKey(key: TKey): boolean;
    includes(elm: [TKey, TValue]): boolean;
    distinct(): MapEnumerable<TKey, TValue>;
}
export default MapEnumerable;
