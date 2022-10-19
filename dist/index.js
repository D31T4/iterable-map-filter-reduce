"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceEqual = exports.isEnumerable = exports.range = void 0;
const base_1 = __importDefault(require("./enumerable/base"));
const array_1 = __importDefault(require("./enumerable/array"));
const map_1 = __importDefault(require("./enumerable/map"));
const set_1 = __importDefault(require("./enumerable/set"));
const object_1 = __importDefault(require("./enumerable/object"));
const range_1 = __importDefault(require("./utils/range"));
exports.range = range_1.default;
const utils_1 = require("./utils");
Object.defineProperty(exports, "isEnumerable", { enumerable: true, get: function () { return utils_1.isEnumerable; } });
Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function () { return utils_1.sequenceEqual; } });
var Enumerable;
(function (Enumerable) {
    Enumerable.TypeMap = [
        [Array, array_1.default],
        [Set, set_1.default],
        [Map, map_1.default]
    ];
    function from(object) {
        if ((0, utils_1.isEnumerable)(object)) {
            for (const [Type, EnumerableObject] of Enumerable.TypeMap)
                if (object instanceof Type)
                    return new EnumerableObject(object);
            return new base_1.default(object);
        }
        if (typeof object === 'object')
            return new object_1.default(object);
        throw new Error('object is not iterable');
    }
    Enumerable.from = from;
})(Enumerable || (Enumerable = {}));
exports.default = Enumerable;
