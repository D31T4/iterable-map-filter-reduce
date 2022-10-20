import _Enumerable from "./enumerable/base";
import ArrayEnumerable from "./enumerable/array";
import './enumerable/array/extension';
import MapEnumerable from "./enumerable/map";
import './enumerable/map/extension';
import SetEnumerable from "./enumerable/set";
import './enumerable/set/extension';
import ObjectEnumerable from "./enumerable/object";

import range from "./utils/range";
import { isEnumerable, sequenceEqual, repeat as _repeat, concat as _concat } from "./utils";

import type { Constructor, uint } from './types';
import { emptyGenerator } from "./utils/default-functions";

namespace Enumerable {
    const TypeMap: [Constructor<object>, Constructor<_Enumerable<unknown>>][] = [
        [Array, ArrayEnumerable],
        [Set, SetEnumerable],
        [Map, MapEnumerable]
    ];

    export function registerTypeMap(Type: Constructor<object>, Target: Constructor<_Enumerable<unknown>>): void {
        TypeMap.push([Type, Target]);
    }

    /**
     * creates an enumerable from an array
     * @param array 
     */
    export function from<T>(array: T[]): _Enumerable<T>
    /**
     * creates an enumerable from a set
     * @param set
     */
    export function from<T>(set: Set<T>): _Enumerable<T>
    /**
     * creates an enumerable from a map
     * @param map
     */
    export function from<TKey, TValue>(map: Map<TKey, TValue>): _Enumerable<[TKey, TValue]>
    /**
     * creates an enumerable from an iterable
     * @param object
     */
    export function from<T>(object: Iterable<T>): _Enumerable<T>
    /**
     * creates an enumerable from an object
     * @param object
     */
    export function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): _Enumerable<[TKey, TValue]>
    export function from(object: any): any {
        if (isEnumerable(object)) {
            for (const [Type, EnumerableObject] of TypeMap)
                if (object instanceof Type)
                    return new EnumerableObject(object);

            return new _Enumerable(object);
        }

        if (typeof object === 'object')
            return new ObjectEnumerable(object);

        throw new Error('object is not iterable');
    }

    /**
     * @returns an empty enumerable
     */
    export function empty<T>(): _Enumerable<T> {
        return new _Enumerable(emptyGenerator());
    }

    /**
     * create a sequence consisting of n `item`
     * @param item 
     * @param count no. of repeating items
     */
    export function repeat<T>(item: T, count: uint): _Enumerable<T> {
        return new _Enumerable(_repeat(item, count));
    }

    export function concat<T>(...args: _Enumerable<T>[]): _Enumerable<T> {
        return new _Enumerable(_concat.apply<void, Iterable<T>[], Iterable<T>>(undefined, args));
    }
}

export { range, isEnumerable, sequenceEqual };
export default Enumerable;