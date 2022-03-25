
import BaseIterator from "./base";

/**wrapper class for objects */
class ArrayIterator<TValue> extends BaseIterator<TValue> {
    protected readonly array: TValue[];

    public constructor(array: TValue[]) {
        super(array);
        this.array = array;
    }

    public count(): number {
        return this.array.length;
    }

    public last(): TValue {
        return this.array[this.array.length - 1];
    }
}

export default ArrayIterator;
