"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEqualityComparer = exports.tautology = void 0;
const tautology = () => true;
exports.tautology = tautology;
function defaultEqualityComparer(elm1, elm2) {
    return elm1 === elm2;
}
exports.defaultEqualityComparer = defaultEqualityComparer;
