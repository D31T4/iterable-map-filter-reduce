import _Enumerable from "./enumerable/base";
import './enumerable/array/extension';
import './enumerable/map/extension';
import './enumerable/set/extension';
import range from "./utils/range";
import { isEnumerable, sequenceEqual } from "./utils";
import type { Constructor, uint } from './types';
declare namespace Enumerable {
    function registerTypeMap(Type: Constructor<object>, Target: Constructor<_Enumerable<unknown>>): void;
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
    /**
     * @returns an empty enumerable
     */
    function empty<T>(): _Enumerable<T>;
    /**
     * create a sequence consisting of n `item`
     * @param item
     * @param count no. of repeating items
     */
    function repeat<T>(item: T, count: uint): _Enumerable<T>;
    function concat<T>(...args: _Enumerable<T>[]): _Enumerable<T>;
}
export { range, isEnumerable, sequenceEqual };
export default Enumerable;
