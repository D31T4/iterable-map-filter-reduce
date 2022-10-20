"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const default_functions_1 = require("../../utils/default-functions");
/**a wrapper class wrapping vanilla Iterables */
class Enumerable {
    constructor(enumerable) {
        this.internalEnumerable = enumerable;
    }
    [Symbol.iterator]() {
        return this.internalEnumerable[Symbol.iterator]();
    }
    /**
     * map
     * @param transformer mapping function
     */
    map(transformer) {
        return new Enumerable((0, utils_1.map)(this.internalEnumerable, transformer));
    }
    /**
     * filter all elements satisfying a predicate
     * @param predicate
     */
    filter(predicate) {
        return new Enumerable((0, utils_1.filter)(this.internalEnumerable, predicate));
    }
    /**
     * reduce
     * @param reducer
     * @param initiator
     * @returns
     */
    reduce(reducer, initiator) {
        return (0, utils_1.reduce)(this.internalEnumerable, reducer, initiator);
    }
    /**
     * run a function for each element in a sequence
     * @param func function
     */
    forEach(func) {
        for (const elm of this)
            func(elm);
    }
    first(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        for (const value of this)
            if (predicate(value))
                return value;
        return undefined;
    }
    last(predicate) {
        let last = undefined;
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        for (const value of this)
            if (predicate(value))
                last = value;
        return last;
    }
    /**
     * @param index
     * @returns the i-th element of the sequence.
     */
    elementAt(index) {
        return this.skip(index).first();
    }
    any(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        for (const value of this)
            if (predicate(value))
                return true;
        return false;
    }
    all(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = Boolean);
        return !this.any(val => !predicate(val));
    }
    /**
     * @param elm element
     * @returns `true` if the element is in the sequence; otherwise `false`.
     */
    includes(elm) {
        return this.any(val => val === elm);
    }
    count(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        let count = 0;
        for (const value of this)
            if (predicate(value))
                ++count;
        return count;
    }
    /**
     * enumerate the sequence
     */
    enumerate() {
        let count = 0;
        return this.map(elm => [count++, elm]);
    }
    /**
     * skip elements in an iterable
     * @param n no. of elements to be skipped
     */
    skip(n) {
        let count = 0;
        return this.filter(() => count++ >= n);
    }
    distinct(compare) {
        if (!compare)
            return this.distinctBy(el => el);
        const list = new Array();
        return this.filter(el => {
            if (list.some(x => compare(el, x)))
                return false;
            list.push(el);
            return true;
        });
    }
    distinctBy(key) {
        const set = new Set();
        return this.filter(el => {
            const k = key(el);
            if (set.has(k))
                return false;
            set.add(k);
            return true;
        });
    }
    /**
     * reverse the sequence
     */
    reverse() {
        return new Enumerable([...this].reverse());
    }
    sort(compare) {
        return new Enumerable([...this].sort(compare));
    }
    /**
     * limit
     * @param n max no. of elements to be returned
     */
    limit(n) {
        return new Enumerable((0, utils_1.limit)(this, n));
    }
    sequenceEqual(seq, compare) {
        return (0, utils_1.sequenceEqual)(this, seq, compare);
    }
    /**
     * prepend sequences in front of this sequence
     * @param args sequences to be prepended
     */
    prepend(...args) {
        return new Enumerable((function* () {
            for (const arg of args)
                yield* arg;
            yield* this;
        }).call(this));
    }
    /**
     * append sequences after this sequence
     * @param args sequences to be appended
     */
    append(...args) {
        return new Enumerable((function* () {
            yield* this;
            for (const arg of args)
                yield* arg;
        }).call(this));
    }
    /**
     * group elements of the sequence
     * @param key key deriver
     * @param reducer aggregation function
     * @param initializer
     */
    groupBy(key, reducer, initializer) {
        const map = new Map();
        for (const el of this) {
            const k = key(el);
            if (map.has(k)) {
                map.set(k, reducer(el, map.get(k)));
            }
            else {
                map.set(k, reducer(el, initializer()));
            }
        }
        return new Enumerable(map).map(kv => kv[1]);
    }
}
exports.default = Enumerable;
