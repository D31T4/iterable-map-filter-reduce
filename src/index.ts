import _Enumerable from "./enumerable/base";
import ArrayEnumerable from "./enumerable/array";
import MapEnumerable from "./enumerable/map";
import SetEnumerable from "./enumerable/set";
import ObjectEnumerable from "./enumerable/object";

import range from "./utils/range";
import { isEnumerable } from "./utils";

namespace Enumerable {
    export function from<T>(array: T[]): _Enumerable<T>
    export function from<T>(set: Set<T>): _Enumerable<T>
    export function from<TKey, TValue>(map: Map<TKey, TValue>): _Enumerable<[TKey, TValue]>
    export function from<T>(object: Iterable<T>): _Enumerable<T>
    export function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): _Enumerable<[TKey, TValue]>
    export function from(object: any): any {
        if (isEnumerable(object)) {
            if (object instanceof Array)
                return new ArrayEnumerable(object);

            if (object instanceof Set)
                return new SetEnumerable(object);

            if (object instanceof Map)
                return new MapEnumerable(object);

            return new _Enumerable(object);
        }

        if (typeof object === 'object')
            return new ObjectEnumerable(object);

        throw new Error('object is not iterable');
    }
}

export { range, isEnumerable };
export default Enumerable;