import type { Predicate } from "../../types";
import Enumerable from "../base";
/**wrapper class for objects */
declare class MapEnumerable<TKey, TValue> extends Enumerable<[TKey, TValue]> {
    protected readonly internalEnumerable: Map<TKey, TValue>;
    constructor(dict: Map<TKey, TValue>);
    any(): boolean;
    any(predicate: Predicate<[TKey, TValue]>): boolean;
    count(): number;
    count(predicate: Predicate<[TKey, TValue]>): number;
    includesKey(key: TKey): boolean;
    includes(elm: [TKey, TValue]): boolean;
    distinct(): MapEnumerable<TKey, TValue>;
}
export default MapEnumerable;
