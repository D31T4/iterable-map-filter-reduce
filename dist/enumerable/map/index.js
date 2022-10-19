"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
require("./extension");
/**wrapper class for objects */
class MapEnumerable extends base_1.default {
    constructor(dict) {
        super(dict);
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
    includesKey(key) {
        return this.internalEnumerable.has(key);
    }
    includes(elm) {
        return this.includesKey(elm[0]) &&
            this.internalEnumerable.get(elm[0]) === elm[1];
    }
    distinct() {
        return this;
    }
}
exports.default = MapEnumerable;
