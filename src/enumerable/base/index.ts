import { map, filter, reduce, sequenceEqual } from '../../utils';
import type { Comparer, Predicate } from '../../types';
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

    public map<T2>(transformer: (elm: T) => T2): Enumerable<T2> {
        return new Enumerable(map<T, T2>(this.internalEnumerable, transformer));
    }

    /**
     * apply filter operation to an `Iterable`
     * @param predicate 
     */
    public filter(predicate: (elm: T) => boolean): Enumerable<T> {
        return new Enumerable(filter(this.internalEnumerable, predicate));
    }

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

    public first(): T | void;
    public first(predicate: Predicate<T>): T | void;
    public first(predicate?: Predicate<T>): T | void {
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                return value;

        return undefined;
    }

    public last(): T | void;
    public last(predicate: Predicate<T>): T | void;
    public last(predicate?: Predicate<T>): T | void {
        let last: T | void = undefined;
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                last = value;

        return last;
    }

    public any(): boolean;
    public any(predicate: Predicate<T>): boolean;
    public any(predicate?: Predicate<T>): boolean {
        predicate ??= tautology;

        for (const value of this)
            if (predicate(value))
                return true;

        return false;
    }

    public all(): boolean;
    public all(predicate: Predicate<T>): boolean;
    public all(predicate?: Predicate<T>): boolean {
        predicate ??= tautology;
        predicate = val => !predicate!(val);

        return !this.any(predicate);
    }

    public includes(elm: T): boolean {
        return this.any(val => val === elm);
    }

    public count(): number;
    public count(predicate: Predicate<T>): number;
    public count(predicate?: Predicate<T>): number {
        predicate ??= tautology;

        let count = 0;

        for (const value of this)
            if (predicate(value))
                ++count;

        return count;
    }

    public enumerate(): Enumerable<[number, T]> {
        let count = 0;
        return this.map<[number, T]>(elm => [count++, elm]);
    }

    /**
     * skip elements in an iterable
     * @param n no. of elements to be skipped
     */
    public skip(n: number): Enumerable<T> {
        let count = 0;        
        return this.filter(() => count++ >= n);
    }

    public distinct(): Enumerable<T> {
        const set = new Set<T>();

        return this.filter(elm => {
            if (set.has(elm)) return false;

            set.add(elm);
            return true;
        });
    }

    public reverse(): Enumerable<T> {
        return new Enumerable([...this].reverse());
    }

    public sequenceEqual(seq: Iterable<T>): boolean;
    public sequenceEqual(seq: Iterable<T>, compare: Comparer<T>): boolean;
    public sequenceEqual(seq: Iterable<T>, compare?: Comparer<T>): boolean {
        return sequenceEqual(this, seq, compare!);
    }
}

export default Enumerable;