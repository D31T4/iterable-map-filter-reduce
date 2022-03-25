"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
/**wrapper class for objects */
class SetIterator extends base_1.default {
    constructor(set) {
        super(set);
        this.set = set;
    }
    count() {
        return this.set.size;
    }
    includes(elm) {
        return this.set.has(elm);
    }
}
exports.default = SetIterator;
