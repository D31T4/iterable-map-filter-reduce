import _Enumerable from "./enumerable/base";
import ArrayEnumerable from "./enumerable/array";
import MapEnumerable from "./enumerable/map";
import SetEnumerable from "./enumerable/set";
import ObjectEnumerable from "./enumerable/object";

import range from "./utils/range";
import { isEnumerable } from "./utils";

import type { Constructor } from './types';

namespace Enumerable {
    export const TypeMap: [Constructor<object>, Constructor<_Enumerable<any>>][] = [
        [Array, ArrayEnumerable],
        [Set, SetEnumerable],
        [Map, MapEnumerable]
    ];

    export function from<T>(array: T[]): _Enumerable<T>
    export function from<T>(set: Set<T>): _Enumerable<T>
    export function from<TKey, TValue>(map: Map<TKey, TValue>): _Enumerable<[TKey, TValue]>
    export function from<T>(object: Iterable<T>): _Enumerable<T>
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
}

export { range, isEnumerable };
export default Enumerable;