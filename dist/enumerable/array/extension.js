"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const base_1 = __importDefault(require("../base"));
Array.prototype.toEnumerable = function () {
    return new _1.default(this);
};
base_1.default.prototype.reverse = function () {
    return new _1.default([...this].reverse());
};
base_1.default.prototype.sort = function (comparer) {
    return new _1.default([...this].sort(comparer));
};
