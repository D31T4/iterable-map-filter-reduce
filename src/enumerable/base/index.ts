import { map, filter, reduce, sequenceEqual, limit } from '../../utils';
import type { EqualityComparer, Comparer, Predicate, uint } from '../../types';
import { tautology } from '../../utils/default-functions';

/**a wrapper class wrapping vanilla Iterables */
class Enumerable<T> implements Iterable<T> {
    /**inner iterable */
    protected readonly internalEnumerable: Iterable<T>;

    public [Symbol.iterator]() {
        return this.internalEnumerable[Symbol.iterator]();
    }

    public constructor(enumerable: Iterable<T>) {
        this.internalEnumerable = enumerable;
    }

    /**
     * map
     * @param transformer mapping function
     */
    public map<T2>(transformer: (elm: T) => T2): Enumerable<T2> {
        return new Enumerable(map<T, T2>(this.internalEnumerable, transformer));
    }

    /**
     * filter all elements satisfying a predicate
     * @param predicate 
     */
    public filter(predicate: Predicate<T>): Enumerable<T> {
        return new Enumerable(filter(this.internalEnumerable, predicate));
    }

    /**
     * reduce
     * @param reducer 
     * @param initiator 
     * @returns 
     */
    public reduce<T2>(reducer: (elm: T, accumulator: T2) => T2, initiator: T2): T2 {
        return reduce(this.internalEnumerable, reducer, initiator);
    }

    /**
     * run a function for each element in a sequence
     * @param func function
     */
    public forEach(func: (elm: T) => void): void {
        for (const elm of this)
            func(elm);
    }

    /**
     * @returns first element of the sequence
     */
    public first(): T | void;
    /**
     * @param predicate 
     * @returns return first element of the sequence satisfying a predicate
     */
    public first(predicate: Predicate<T>): T | void;
    public first(predicate?: Predicate<T>): T | void {
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                return value;

        return undefined;
    }

    /**
     * @returns last element of the sequence
     */
    public last(): T | void;
    /**
     * @returns last element of the sequence satisfying a predicate
     */
    public last(predicate: Predicate<T>): T | void;
    public last(predicate?: Predicate<T>): T | void {
        let last: T | void = undefined;
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                last = value;

        return last;
    }

    /**
     * @param index
     * @returns the i-th element of the sequence.
     */
    public elementAt(index: uint): T | void {
        return this.skip(index).first();
    }

    /**
     * check if the sequence contains any elements.
     * @returns `true` if the sequence contains at least 1 element; otherwise `false`.
     */
    public any(): boolean;
    /**
     * check if the sequence contains any elements satisfying a predicate.
     * @returns `true` if the sequence contains at least 1 element which satisfies the predicate; otherwise `false`.
     */
    public any(predicate: Predicate<T>): boolean;
    public any(predicate?: Predicate<T>): boolean {
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                return true;

        return false;
    }

    /**
     * @returns `true` if all elements eveluate to `true`; otherwise `false`.
     */
    public all(): boolean;
    /**
     * @returns `true` if all elements satisfy the predicate; otherwise `false`.
     */
    public all(predicate: Predicate<T>): boolean;
    public all(predicate?: Predicate<T>): boolean {
        predicate ??= Boolean;
        return !this.any(val => !predicate!(val));
    }

    /**
     * @param elm element
     * @returns `true` if the element is in the sequence; otherwise `false`.
     */
    public includes(elm: T): boolean {
        return this.any(val => val === elm);
    }

    /**
     * @returns no. of elements in the sequence.
     */
    public count(): uint;
    /**
     * @param predicate 
     * @returns no. of elements satisfying the predicate in the sequence.
     */
    public count(predicate: Predicate<T>): uint;
    public count(predicate?: Predicate<T>): uint {
        predicate ??= tautology;

        let count = 0;

        for (const value of this)
            if (predicate(value))
                ++count;

        return count;
    }

    /**
     * enumerate the sequence
     */
    public enumerate(): Enumerable<[uint, T]> {
        let count = 0;
        return this.map<[uint, T]>(elm => [count++, elm]);
    }

    /**
     * skip elements in an iterable
     * @param n no. of elements to be skipped
     */
    public skip(n: uint): Enumerable<T> {
        let count = 0;        
        return this.filter(() => count++ >= n);
    }

    /**
     * @returns distinct elements of the sequence.
     */
    public distinct(): Enumerable<T>;
    public distinct(compare: EqualityComparer<T>): Enumerable<T>;
    public distinct(compare?: EqualityComparer<T>): Enumerable<T> {
        if (!compare)
            return this.distinctBy(el => el);

        const list = new Array<T>();

        return this.filter(el => {
            if (list.some(x => compare(el, x)))
                return false;

            list.push(el);
            return true;
        });
    }

    public distinctBy<K>(key: (elm: T) => K): Enumerable<T> {
        const set = new Set<K>();

        return this.filter(el => {
            const k = key(el);
            if (set.has(k)) return false;

            set.add(k);
            return true;
        });
    }

    /**
     * reverse the sequence
     */
    public reverse(): Enumerable<T> {
        return new Enumerable([...this].reverse());
    }

    public sort(): Enumerable<T>;
    public sort(compare: Comparer<T>): Enumerable<T>;
    public sort(compare?: Comparer<T>): Enumerable<T> {
        return new Enumerable([...this].sort(compare));
    }

    /**
     * limit
     * @param n max no. of elements to be returned
     */
    public limit(n: uint): Enumerable<T> {
        return new Enumerable(limit(this, n));
    }

    public sequenceEqual(seq: Iterable<T>): boolean;
    public sequenceEqual(seq: Iterable<T>, compare: EqualityComparer<T>): boolean;
    public sequenceEqual(seq: Iterable<T>, compare?: EqualityComparer<T>): boolean {
        return sequenceEqual(this, seq, compare!);
    }

    /**
     * prepend sequences in front of this sequence
     * @param args sequences to be prepended
     */
    public prepend(...args: Iterable<T>[]): Enumerable<T> {
        return new Enumerable((
            function* (this: Enumerable<T>) {
                for (const arg of args)
                    yield* arg;

                yield* this;
            }
        ).call(this));
    }

    /**
     * append sequences after this sequence
     * @param args sequences to be appended
     */
    public append(...args: Iterable<T>[]): Enumerable<T> {
        return new Enumerable((
            function* (this: Enumerable<T>) {
                yield* this;

                for (const arg of args)
                    yield* arg;
            }
        ).call(this));
    }

    /**
     * group elements of the sequence
     * @param key key deriver
     * @param reducer aggregation function
     * @param initializer 
     */
    public groupBy<K, A>(key: (el: T) => K, reducer: (el: T, current: A) => A, initializer: () => A): Enumerable<A> {
        const map = new Map<K, A>();

        for (const el of this) {
            const k = key(el);

            if (map.has(k)) {
                map.set(k, reducer(el, map.get(k)!));
            } else {
                map.set(k, reducer(el, initializer()));
            }
        }

        return new Enumerable(map).map(kv => kv[1]);
    }
}

export default Enumerable;