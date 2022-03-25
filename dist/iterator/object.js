"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
/**wrapper class for objects */
class ObjectIterator extends base_1.default {
    constructor(object) {
        super(iterateObject(object));
        this.object = object;
    }
    includes(elm) {
        return this.object.hasOwnProperty(elm[0]) && this.object[elm[0]] === elm[1];
    }
}
exports.default = ObjectIterator;
/**
 * transform object into key value pair iterator
 * @template TKey type of key
 * @template TValue type of value
 * @returns key value pair iterator
 */
function* iterateObject(object) {
    for (const key in object) {
        yield [key, object[key]];
    }
}
