"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**a wrapper class wrapping vanilla Iterables */
class BaseIterator {
    constructor(iterable) {
        this.iterable = iterable;
    }
    /**get inner iterable */
    get getIterable() {
        return this.iterable;
    }
    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }
    map(transformer) {
        return new BaseIterator(map(this.iterable, transformer));
    }
    filter(predicate) {
        return new BaseIterator(filter(this.iterable, predicate));
    }
    reduce(reducer, initiator) {
        return reduce(this.iterable, reducer, initiator);
    }
    forEach(func) {
        for (const elm of this.iterable)
            func(elm);
    }
    first() {
        for (const value of this.iterable)
            return value;
        return undefined;
    }
    last() {
        let last = undefined;
        for (const value of this.iterable)
            last = value;
        return last;
    }
    includes(elm) {
        for (const value of this.iterable)
            if (elm === value)
                return true;
        return false;
    }
    count() {
        return this.reduce((_, accumulator) => accumulator + 1, 0);
    }
    toArray() {
        return [...this];
    }
}
exports.default = BaseIterator;
function* map(iterable, transformer) {
    for (const elm of iterable)
        yield transformer(elm);
}
function* filter(iterable, predicate) {
    for (const elm of iterable)
        if (predicate(elm))
            yield elm;
}
function reduce(iterable, reducer, initiator) {
    let accumulator = initiator;
    for (const elm of iterable)
        accumulator = reducer(elm, accumulator);
    return accumulator;
}
