import BaseIterator from "./iterator/base";
declare namespace Iterator {
    function from<T>(array: T[]): BaseIterator<T>;
    function from<T>(set: Set<T>): BaseIterator<T>;
    function from<TKey, TValue>(map: Map<TKey, TValue>): BaseIterator<[TKey, TValue]>;
    function from<T>(object: Iterable<T>): BaseIterator<T>;
    function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): BaseIterator<[TKey, TValue]>;
}
export default Iterator;
