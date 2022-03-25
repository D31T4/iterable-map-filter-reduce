"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
/**wrapper class for objects */
class MapIterator extends base_1.default {
    constructor(dict) {
        super(dict);
        this.dict = dict;
    }
    count() {
        return this.dict.size;
    }
    includes(elm) {
        return this.dict.has(elm[0]) && this.dict.get(elm[0]) === elm[1];
    }
}
exports.default = MapIterator;
