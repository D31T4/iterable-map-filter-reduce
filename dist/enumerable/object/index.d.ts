import Enumerable from "../base";
/**wrapper class for objects */
declare class ObjectEnumerable<TKey extends string | number | symbol = string | number | symbol, TValue = any> extends Enumerable<[TKey, TValue]> {
    protected readonly object: Record<TKey, TValue>;
    constructor(object: Record<TKey, TValue>);
    includesKey(key: TKey): boolean;
    includes(elm: [TKey, TValue]): boolean;
    distinct(): ObjectEnumerable<TKey, TValue>;
}
export default ObjectEnumerable;
