
import ArrayIterator from "./iterator/array";
import BaseIterator from "./iterator/base";
import MapIterator from "./iterator/map";
import ObjectIterator from "./iterator/object";
import SetIterator from "./iterator/set";

namespace Iterator {
    function isIterable(object: any): boolean {
        return Boolean(object[Symbol.iterator]);
    }

    export function from<T>(array: T[]): BaseIterator<T>
    export function from<T>(set: Set<T>): BaseIterator<T>
    export function from<TKey, TValue>(map: Map<TKey, TValue>): BaseIterator<[TKey, TValue]>
    export function from<T>(object: Iterable<T>): BaseIterator<T>
    export function from<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): BaseIterator<[TKey, TValue]>
    export function from(object: any): any {
        if (isIterable(object)) {
            if (object instanceof Array)
                return new ArrayIterator(object);

            if (object instanceof Set)
                return new SetIterator(object);

            if (object instanceof Map)
                return new MapIterator(object);

            return new BaseIterator(object);
        }

        if (typeof object === 'object')
            return new ObjectIterator(object);

        throw new Error('object is not iterable');
    }
}

export default Iterator;
