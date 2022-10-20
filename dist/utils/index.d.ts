import type { Predicate, EqualityComparer, uint } from "src/types";
/**
 * checks whether an object is iterable
 * @param obj
 * @returns `true` if the object is iterable; otherwise `false`.
 */
export declare function isEnumerable(obj: any): boolean;
/**
 * compare 2 sequence by element
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @returns comparison result
 */
export declare function sequenceEqual<T>(seq1: Iterable<T>, seq2: Iterable<T>): boolean;
/**
 * compare 2 sequence by element
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @param compare comparator
 * @returns comparison result
 */
export declare function sequenceEqual<T>(seq1: Iterable<T>, seq2: Iterable<T>, compare: EqualityComparer<T>): boolean;
export declare function map<T1, T2>(iterable: Iterable<T1>, transformer: (elm: T1) => T2): Iterable<T2>;
/**
 * apply filter operation to an `Iterable`
 * @param iterable
 * @param predicate
 */
export declare function filter<T>(iterable: Iterable<T>, predicate: Predicate<T>): Iterable<T>;
export declare function reduce<TElm, TRed>(iterable: Iterable<TElm>, reducer: (elm: TElm, accumulator: TRed) => TRed, initiator: TRed): TRed;
/**
 * zip 2 iterables to form a new iterable yielding 2-tuples
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @returns a new iterable yielding 2-tuples formed by elements of `seq1` and `seq2`
 */
export declare function zip<T1, T2>(seq1: Iterable<T1>, seq2: Iterable<T2>): Iterable<[T1, T2]>;
/**
 * truncate a sequence
 * @param seq sequence
 * @param n no. of sequence in the new sequence.
 * @returns a new sequences with a maximum of n elements
 */
export declare function limit<T>(seq: Iterable<T>, n: uint): Iterable<T>;
/**
 * create a sequence consisting of n `item`
 * @param item
 * @param n no. of repeating items
 */
export declare function repeat<T>(item: T, n: uint): Iterable<T>;
export declare function concat<T>(...args: Iterable<T>[]): Iterable<T>;
