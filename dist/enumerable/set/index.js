"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
require("./extension");
/**wrapper class for objects */
class SetEnumerable extends base_1.default {
    constructor(set) {
        super(set);
    }
    any(predicate) {
        return predicate ?
            super.any(predicate) :
            this.internalEnumerable.size > 0;
    }
    count(predicate) {
        return predicate ?
            super.count(predicate) :
            this.internalEnumerable.size;
    }
    includes(elm) {
        return this.internalEnumerable.has(elm);
    }
    distinct() {
        return this;
    }
}
exports.default = SetEnumerable;
