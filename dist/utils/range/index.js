"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* range(arg0, arg1, arg2) {
    if (arg1 == void 0) {
        arg1 = arg0;
        arg0 = 0;
    }
    if (arg2 == void 0)
        arg2 = arg1 > arg0 ? 1 : -1;
    const stop = arg2 > 0 ?
        x => x >= arg1 :
        x => x <= arg1;
    let num = arg0;
    while (!stop(num)) {
        yield num;
        num += arg2;
    }
}
exports.default = range;
