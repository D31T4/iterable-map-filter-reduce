"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("../base"));
const _1 = __importDefault(require("."));
Set.prototype.toEnumerable = function () {
    return new _1.default(this);
};
const originalDistinct = base_1.default.prototype.distinct;
base_1.default.prototype.distinct = function (compare) {
    return compare ?
        originalDistinct.call(this, compare) :
        new Set(this).toEnumerable();
};
