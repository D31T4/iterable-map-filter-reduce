
import BaseIterator from "./base";

/**wrapper class for objects */
class SetIterator<TValue> extends BaseIterator<TValue> {
    protected readonly set: Set<TValue>;

    public constructor(set: Set<TValue>) {
        super(set);
        this.set = set;
    }

    public count(): number {
        return this.set.size;
    }

    public includes(elm: TValue): boolean {
        return this.set.has(elm);
    }
}

export default SetIterator;