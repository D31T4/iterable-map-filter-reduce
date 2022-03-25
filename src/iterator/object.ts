
import BaseIterator from "./base";

/**wrapper class for objects */
class ObjectIterator<TKey extends string | number | symbol = string | number | symbol, TValue = any> extends BaseIterator<[TKey, TValue]> {
    protected readonly object: Record<TKey, TValue>;
    
    public constructor(object: Record<TKey, TValue>) {
        super(iterateObject(object));
        this.object = object;
    }

    public includes(elm: [TKey, TValue]): boolean {
        return this.object.hasOwnProperty(elm[0]) && this.object[elm[0]] === elm[1];
    }
}

export default ObjectIterator;

/**
 * transform object into key value pair iterator
 * @template TKey type of key
 * @template TValue type of value
 * @returns key value pair iterator
 */
function* iterateObject<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): Iterable<[TKey, TValue]> {
    for (const key in object) {
        yield [key, object[key]];
    }
}
