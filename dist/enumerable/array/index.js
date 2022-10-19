"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
/**wrapper class for objects */
class ArrayEnumerable extends base_1.default {
    constructor(array) {
        super(array);
    }
    any(predicate) {
        return predicate ?
            super.any(predicate) :
            this.internalEnumerable.length > 0;
    }
    count(predicate) {
        return predicate ?
            super.count(predicate) :
            this.internalEnumerable.length;
    }
    first(predicate) {
        return predicate ?
            super.first(predicate) :
            this.internalEnumerable[0];
    }
    last(predicate) {
        return predicate ?
            super.last(predicate) :
            this.internalEnumerable[this.internalEnumerable.length - 1];
    }
    reverse() {
        return new base_1.default(reverse(this.internalEnumerable));
    }
    skip(n) {
        return new base_1.default(skip(this.internalEnumerable, n));
    }
}
base_1.default.prototype.reverse = function () {
    return new ArrayEnumerable([...this].reverse());
};
exports.default = ArrayEnumerable;
function* skip(seq, n) {
    for (let i = n; i < seq.length; ++i)
        yield seq[i];
}
function* reverse(seq) {
    for (let i = seq.length - 1; i >= 0; --i)
        yield seq[i];
}
