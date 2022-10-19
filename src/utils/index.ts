import type { Predicate, Comparer } from "src/types";
import { defaultCompare } from "./default-functions";

export function* iterate<T>(seq: Iterable<T>) {
    for (const elm of seq)
        yield elm;
}

export function isEnumerable(obj: any): boolean {
    return Boolean(obj[Symbol.iterator]);
}

/**
 * compare 2 sequence by element
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @returns comparison result
 */
export function sequenceEqual<T>(seq1: Iterable<T>, seq2: Iterable<T>): boolean;
/**
 * compare 2 sequence by element
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @param compare comparator
 * @returns comparison result
 */
export function sequenceEqual<T>(seq1: Iterable<T>, seq2: Iterable<T>, compare: Comparer<T>): boolean;
export function sequenceEqual<T>(seq1: Iterable<T>, seq2: Iterable<T>, compare?: Comparer<T>): boolean {
    if (seq1 === seq2) return true;

    compare ??= defaultCompare;

    const it1 = seq1[Symbol.iterator]();
    const it2 = seq2[Symbol.iterator]();

    let result1 = it1.next();
    let result2 = it2.next();

    while (!result1.done && !result2.done) {
        if (!compare(result1.value, result2.value))
            return false;

        result1 = it1.next();
        result2 = it2.next();
    }

    return result1.done === result2.done;
}

export function* map<T1, T2>(iterable: Iterable<T1>, transformer: (elm: T1) => T2): Iterable<T2> {
    for (const elm of iterable)
        yield transformer(elm);
}

/**
 * apply filter operation to an `Iterable`
 * @param seq 
 * @param predicate 
 */
export function* filter<T>(iterable: Iterable<T>, predicate: Predicate<T>): Iterable<T> {
    for (const elm of iterable)
        if (predicate(elm))
            yield elm;
}

export function reduce<TElm, TRed>(iterable: Iterable<TElm>, reducer: (elm: TElm, accumulator: TRed) => TRed, initiator: TRed): TRed {
    let accumulator: TRed = initiator;
        
    for (const elm of iterable)
        accumulator = reducer(elm, accumulator);

    return accumulator;
}

/**
 * zip 2 iterables to form a new iterable yielding 2-tuples
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @returns a new iterable yielding 2-tuples formed by elements of `seq1` and `seq2`
 */
export function* zip<T1, T2>(seq1: Iterable<T1>, seq2: Iterable<T2>): Iterable<[T1, T2]> {
    const it1 = seq1[Symbol.iterator]();
    const it2 = seq2[Symbol.iterator]();

    let result1 = it1.next();
    let result2 = it2.next();

    while (!result1.done && !result2.done) {
        yield [result1.value, result2.value];

        result1 = it1.next();
        result2 = it2.next();
    }
}

/**
 * truncate a sequence
 * @param seq sequence
 * @param n no. of sequence in the new sequence.
 * @returns a new sequences with a maximum of n elements
 */
export function* limit<T>(seq: Iterable<T>, n: number): Iterable<T> {
    let count = 0;

    for (const elm of seq) {
        if (count++ >= n)
            break;

        yield elm;
    }
}

