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
    map(transformer) {
        return new Enumerable((0, utils_1.map)(this.internalEnumerable, transformer));
    }
    /**
     * apply filter operation to an `Iterable`
     * @param predicate
     */
    filter(predicate) {
        return new Enumerable((0, utils_1.filter)(this.internalEnumerable, predicate));
    }
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
    any(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        for (const value of this)
            if (predicate(value))
                return true;
        return false;
    }
    all(predicate) {
        predicate !== null && predicate !== void 0 ? predicate : (predicate = default_functions_1.tautology);
        predicate = val => !predicate(val);
        return !this.any(predicate);
    }
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
    distinct() {
        const set = new Set();
        return this.filter(elm => {
            if (set.has(elm))
                return false;
            set.add(elm);
            return true;
        });
    }
    reverse() {
        return new Enumerable([...this].reverse());
    }
    sequenceEqual(seq, compare) {
        return (0, utils_1.sequenceEqual)(this, seq, compare);
    }
}
exports.default = Enumerable;
