import BaseIterator from "./base";
/**wrapper class for objects */
declare class ObjectIterator<TKey extends string | number | symbol = string | number | symbol, TValue = any> extends BaseIterator<[TKey, TValue]> {
    protected readonly object: Record<TKey, TValue>;
    constructor(object: Record<TKey, TValue>);
    includes(elm: [TKey, TValue]): boolean;
}
export default ObjectIterator;
