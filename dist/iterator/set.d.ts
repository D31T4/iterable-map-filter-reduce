import BaseIterator from "./base";
/**wrapper class for objects */
declare class SetIterator<TValue> extends BaseIterator<TValue> {
    protected readonly set: Set<TValue>;
    constructor(set: Set<TValue>);
    count(): number;
    includes(elm: TValue): boolean;
}
export default SetIterator;
