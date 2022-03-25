
import BaseIterator from "./base";

/**wrapper class for objects */
class MapIterator<TKey, TValue> extends BaseIterator<[TKey, TValue]> {
    protected readonly dict: Map<TKey, TValue>;

    public constructor(dict: Map<TKey, TValue>) {
        super(dict);
        this.dict = dict;
    }

    public count(): number {
        return this.dict.size;
    }

    public includes(elm: [TKey, TValue]): boolean {
        return this.dict.has(elm[0]) && this.dict.get(elm[0]) === elm[1];
    }
}

export default MapIterator;