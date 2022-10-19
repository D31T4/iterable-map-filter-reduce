import _Enumerable from "./enumerable/base";
import range from "./utils/range";
import { isEnumerable, sequenceEqual } from "./utils";
import type { Constructor } from './types';
declare namespace Enumerable {
    const TypeMap: [Constructor<object>, Constructor<_Enumerable<unknown>>][];
    /**
     * creates an enumerable from an array
     * @param array
     */
    function from<T>(array: T[]): _Enumerable<T>;
    /**
     * creates an enumerable from a set
     * @param set
     */
    function from<T>(set: Set<T>): _Enumerable<T>;
    /**
     * creates an enumerable from a map
     * @param map
     */
    function from<TKey, TValue>(map: Map<TKey, TValue>): _Enumerable<[TKey, TValue]>;
    /**
     * creates an enumerable from an iterable
     * @param object
     */
    function from<T>(object: Iterable<T>): _Enumerable<T>;
    /**
     * creates an enumerable from an object
     * @param object
     */
    function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): _Enumerable<[TKey, TValue]>;
}
export { range, isEnumerable, sequenceEqual };
export default Enumerable;
