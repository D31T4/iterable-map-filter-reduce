import type { Comparer, Predicate } from '../../types';
/**a wrapper class wrapping vanilla Iterables */
declare class Enumerable<T> implements Iterable<T> {
    /**inner iterable */
    protected readonly internalEnumerable: Iterable<T>;
    [Symbol.iterator](): Iterator<T, any, undefined>;
    constructor(enumerable: Iterable<T>);
    map<T2>(transformer: (elm: T) => T2): Enumerable<T2>;
    /**
     * apply filter operation to an `Iterable`
     * @param predicate
     */
    filter(predicate: (elm: T) => boolean): Enumerable<T>;
    reduce<T2>(reducer: (elm: T, accumulator: T2) => T2, initiator: T2): T2;
    /**
     * run a function for each element in a sequence
     * @param func function
     */
    forEach(func: (elm: T) => void): void;
    first(): T | void;
    first(predicate: Predicate<T>): T | void;
    last(): T | void;
    last(predicate: Predicate<T>): T | void;
    any(): boolean;
    any(predicate: Predicate<T>): boolean;
    all(): boolean;
    all(predicate: Predicate<T>): boolean;
    includes(elm: T): boolean;
    count(): number;
    count(predicate: Predicate<T>): number;
    enumerate(): Enumerable<[number, T]>;
    /**
     * skip elements in an iterable
     * @param n no. of elements to be skipped
     */
    skip(n: number): Enumerable<T>;
    distinct(): Enumerable<T>;
    reverse(): Enumerable<T>;
    sequenceEqual(seq: Iterable<T>): boolean;
    sequenceEqual(seq: Iterable<T>, compare: Comparer<T>): boolean;
}
export default Enumerable;
