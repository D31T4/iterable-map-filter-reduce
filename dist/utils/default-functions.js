"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCompare = exports.tautology = void 0;
const tautology = () => true;
exports.tautology = tautology;
function defaultCompare(elm1, elm2) {
    return elm1 === elm2;
}
exports.defaultCompare = defaultCompare;
