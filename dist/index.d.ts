import _Enumerable from "./enumerable/base";
import range from "./utils/range";
import { isEnumerable } from "./utils";
declare namespace Enumerable {
    function from<T>(array: T[]): _Enumerable<T>;
    function from<T>(set: Set<T>): _Enumerable<T>;
    function from<TKey, TValue>(map: Map<TKey, TValue>): _Enumerable<[TKey, TValue]>;
    function from<T>(object: Iterable<T>): _Enumerable<T>;
    function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): _Enumerable<[TKey, TValue]>;
}
export { range, isEnumerable };
export default Enumerable;
