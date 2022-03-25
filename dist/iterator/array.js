"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
/**wrapper class for objects */
class ArrayIterator extends base_1.default {
    constructor(array) {
        super(array);
        this.array = array;
    }
    count() {
        return this.array.length;
    }
    last() {
        return this.array[this.array.length - 1];
    }
}
exports.default = ArrayIterator;
