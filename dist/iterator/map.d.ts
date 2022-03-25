import BaseIterator from "./base";
/**wrapper class for objects */
declare class MapIterator<TKey, TValue> extends BaseIterator<[TKey, TValue]> {
    protected readonly dict: Map<TKey, TValue>;
    constructor(dict: Map<TKey, TValue>);
    count(): number;
    includes(elm: [TKey, TValue]): boolean;
}
export default MapIterator;
