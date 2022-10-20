"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceEqual = exports.isEnumerable = exports.range = void 0;
const base_1 = __importDefault(require("./enumerable/base"));
const array_1 = __importDefault(require("./enumerable/array"));
require("./enumerable/array/extension");
const map_1 = __importDefault(require("./enumerable/map"));
require("./enumerable/map/extension");
const set_1 = __importDefault(require("./enumerable/set"));
require("./enumerable/set/extension");
const object_1 = __importDefault(require("./enumerable/object"));
const range_1 = __importDefault(require("./utils/range"));
exports.range = range_1.default;
const utils_1 = require("./utils");
Object.defineProperty(exports, "isEnumerable", { enumerable: true, get: function () { return utils_1.isEnumerable; } });
Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function () { return utils_1.sequenceEqual; } });
const default_functions_1 = require("./utils/default-functions");
var Enumerable;
(function (Enumerable) {
    const TypeMap = [
        [Array, array_1.default],
        [Set, set_1.default],
        [Map, map_1.default]
    ];
    function registerTypeMap(Type, Target) {
        TypeMap.push([Type, Target]);
    }
    Enumerable.registerTypeMap = registerTypeMap;
    function from(object) {
        if ((0, utils_1.isEnumerable)(object)) {
            for (const [Type, EnumerableObject] of TypeMap)
                if (object instanceof Type)
                    return new EnumerableObject(object);
            return new base_1.default(object);
        }
        if (typeof object === 'object')
            return new object_1.default(object);
        throw new Error('object is not iterable');
    }
    Enumerable.from = from;
    /**
     * @returns an empty enumerable
     */
    function empty() {
        return new base_1.default((0, default_functions_1.emptyGenerator)());
    }
    Enumerable.empty = empty;
    /**
     * create a sequence consisting of n `item`
     * @param item
     * @param count no. of repeating items
     */
    function repeat(item, count) {
        return new base_1.default((0, utils_1.repeat)(item, count));
    }
    Enumerable.repeat = repeat;
    function concat(...args) {
        return new base_1.default(utils_1.concat.apply(undefined, args));
    }
    Enumerable.concat = concat;
})(Enumerable || (Enumerable = {}));
exports.default = Enumerable;
