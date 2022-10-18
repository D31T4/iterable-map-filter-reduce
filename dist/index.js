"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnumerable = exports.range = void 0;
const base_1 = __importDefault(require("./enumerable/base"));
const array_1 = __importDefault(require("./enumerable/array"));
const map_1 = __importDefault(require("./enumerable/map"));
const set_1 = __importDefault(require("./enumerable/set"));
const object_1 = __importDefault(require("./enumerable/object"));
const range_1 = __importDefault(require("./utils/range"));
exports.range = range_1.default;
const utils_1 = require("./utils");
Object.defineProperty(exports, "isEnumerable", { enumerable: true, get: function () { return utils_1.isEnumerable; } });
var Enumerable;
(function (Enumerable) {
    function from(object) {
        if ((0, utils_1.isEnumerable)(object)) {
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
    Enumerable.from = from;
})(Enumerable || (Enumerable = {}));
exports.default = Enumerable;
