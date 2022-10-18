import Enumerable from "../base";

/**wrapper class for objects */
class ObjectEnumerable<TKey extends string | number | symbol = string | number | symbol, TValue = any> extends Enumerable<[TKey, TValue]> {
    protected readonly object: Record<TKey, TValue>;
    
    public constructor(object: Record<TKey, TValue>) {
        super(iterateObject(object));
        this.object = object;
    }

    public includesKey(key: TKey): boolean {
        return this.object.hasOwnProperty(key);
    }

    public includes(elm: [TKey, TValue]): boolean {
        return this.includesKey(elm[0]) && 
            this.object[elm[0]] === elm[1];
    }

    public distinct(): ObjectEnumerable<TKey, TValue> {
        return this;
    }
}

export default ObjectEnumerable;

/**
 * transform object into key value pair iterator
 * @template TKey type of key
 * @template TValue type of value
 * @returns key value pair iterator
 */
function* iterateObject<TKey extends string | number | symbol = string | number | symbol, TValue = any>(object: Record<TKey, TValue>): Iterable<[TKey, TValue]> {
    for (const key in object)
        yield [key, object[key]];
}
