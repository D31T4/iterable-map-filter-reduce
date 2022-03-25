import BaseIterator from "./base";
/**wrapper class for objects */
declare class ArrayIterator<TValue> extends BaseIterator<TValue> {
    protected readonly array: TValue[];
    constructor(array: TValue[]);
    count(): number;
    last(): TValue;
}
export default ArrayIterator;
