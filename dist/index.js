"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./iterator/array"));
const base_1 = __importDefault(require("./iterator/base"));
const map_1 = __importDefault(require("./iterator/map"));
const object_1 = __importDefault(require("./iterator/object"));
const set_1 = __importDefault(require("./iterator/set"));
var Iterator;
(function (Iterator) {
    function isIterable(object) {
        return Boolean(object[Symbol.iterator]);
    }
    function from(object) {
        if (isIterable(object)) {
            if (object instanceof Array)
                return new array_1.default(object);
            if (object instanceof Set)
                return new set_1.default(object);
            if (object instanceof Map)
                return new map_1.default(object);
            return new base_1.default(object);
        }
        if (typeof object === 'object')
            return new object_1.default(object);
        throw new Error('object is not iterable');
    }
    Iterator.from = from;
})(Iterator || (Iterator = {}));
exports.default = Iterator;
