"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = exports.reduce = exports.filter = exports.map = exports.sequenceEqual = exports.isEnumerable = exports.iterate = void 0;
const default_functions_1 = require("./default-functions");
function* iterate(seq) {
    for (const elm of seq)
        yield elm;
}
exports.iterate = iterate;
function isEnumerable(obj) {
    return Boolean(obj[Symbol.iterator]);
}
exports.isEnumerable = isEnumerable;
function sequenceEqual(seq1, seq2, compare) {
    if (seq1 === seq2)
        return true;
    compare !== null && compare !== void 0 ? compare : (compare = default_functions_1.defaultCompare);
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
exports.sequenceEqual = sequenceEqual;
function* map(iterable, transformer) {
    for (const elm of iterable)
        yield transformer(elm);
}
exports.map = map;
/**
 * apply filter operation to an `Iterable`
 * @param seq
 * @param predicate
 */
function* filter(iterable, predicate) {
    for (const elm of iterable)
        if (predicate(elm))
            yield elm;
}
exports.filter = filter;
function reduce(iterable, reducer, initiator) {
    let accumulator = initiator;
    for (const elm of iterable)
        accumulator = reducer(elm, accumulator);
    return accumulator;
}
exports.reduce = reduce;
/**
 * zip 2 iterables to form a new iterable yielding 2-tuples
 * @param seq1 sequence 1
 * @param seq2 sequence 2
 * @returns a new iterable yielding 2-tuples formed by elements of `seq1` and `seq2`
 */
function* zip(seq1, seq2) {
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
exports.zip = zip;
