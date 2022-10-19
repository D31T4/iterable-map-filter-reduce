import type { EqualityComparer, Comparer, Predicate, uint } from '../../types';
/**a wrapper class wrapping vanilla Iterables */
declare class Enumerable<T> implements Iterable<T> {
    /**inner iterable */
    protected readonly internalEnumerable: Iterable<T>;
    [Symbol.iterator](): Iterator<T, any, undefined>;
    constructor(enumerable: Iterable<T>);
    /**
     * map
     * @param transformer mapping function
     */
    map<T2>(transformer: (elm: T) => T2): Enumerable<T2>;
    /**
     * filter all elements satisfying a predicate
     * @param predicate
     */
    filter(predicate: Predicate<T>): Enumerable<T>;
    /**
     * reduce
     * @param reducer
     * @param initiator
     * @returns
     */
    reduce<T2>(reducer: (elm: T, accumulator: T2) => T2, initiator: T2): T2;
    /**
     * run a function for each element in a sequence
     * @param func function
     */
    forEach(func: (elm: T) => void): void;
    /**
     * @returns first element of the sequence
     */
    first(): T | void;
    /**
     * @param predicate
     * @returns return first element of the sequence satisfying a predicate
     */
    first(predicate: Predicate<T>): T | void;
    /**
     * @returns last element of the sequence
     */
    last(): T | void;
    /**
     * @returns last element of the sequence satisfying a predicate
     */
    last(predicate: Predicate<T>): T | void;
    /**
     * check if the sequence contains any elements.
     * @returns `true` if the sequence contains at least 1 element; otherwise `false`.
     */
    any(): boolean;
    /**
     * check if the sequence contains any elements satisfying a predicate.
     * @returns `true` if the sequence contains at least 1 element which satisfies the predicate; otherwise `false`.
     */
    any(predicate: Predicate<T>): boolean;
    /**
     * @returns `true` if all elements eveluate to `true`; otherwise `false`.
     */
    all(): boolean;
    /**
     * @returns `true` if all elements satisfy the predicate; otherwise `false`.
     */
    all(predicate: Predicate<T>): boolean;
    /**
     * @param elm element
     * @returns `true` if the element is in the sequence; otherwise `false`.
     */
    includes(elm: T): boolean;
    /**
     * @returns no. of elements in the sequence.
     */
    count(): uint;
    /**
     * @param predicate
     * @returns no. of elements satisfying the predicate in the sequence.
     */
    count(predicate: Predicate<T>): uint;
    /**
     * enumerate the sequence
     */
    enumerate(): Enumerable<[uint, T]>;
    /**
     * skip elements in an iterable
     * @param n no. of elements to be skipped
     */
    skip(n: uint): Enumerable<T>;
    /**
     * @returns distinct elements of the sequence.
     */
    distinct(): Enumerable<T>;
    distinct(compare: EqualityComparer<T>): Enumerable<T>;
    /**
     * reverse the sequence
     */
    reverse(): Enumerable<T>;
    sort(): Enumerable<T>;
    sort(compare: Comparer<T>): Enumerable<T>;
    /**
     * limit
     * @param n max no. of elements to be returned
     */
    limit(n: uint): Enumerable<T>;
    sequenceEqual(seq: Iterable<T>): boolean;
    sequenceEqual(seq: Iterable<T>, compare: EqualityComparer<T>): boolean;
}
export default Enumerable;
