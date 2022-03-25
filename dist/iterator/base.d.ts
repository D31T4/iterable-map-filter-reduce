/**a wrapper class wrapping vanilla Iterables */
declare class BaseIterator<TValue> implements Iterable<TValue> {
    /**inner iterable */
    protected iterable: Iterable<TValue>;
    /**get inner iterable */
    get getIterable(): Iterable<TValue>;
    [Symbol.iterator](): Iterator<TValue, any, undefined>;
    constructor(iterable: Iterable<TValue>);
    map<T2>(transformer: (elm: TValue) => T2): BaseIterator<T2>;
    filter(predicate: (elm: TValue) => boolean): BaseIterator<TValue>;
    reduce<T2>(reducer: (elm: TValue, accumulator: T2) => T2, initiator: T2): T2;
    forEach(func: (elm: TValue) => void): void;
    first(): TValue | undefined;
    last(): TValue | undefined;
    includes(elm: TValue): boolean;
    count(): number;
    toArray(): TValue[];
}
export default BaseIterator;
