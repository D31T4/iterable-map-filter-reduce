import type { Predicate } from "src/types";

export default function range(end: number): Iterable<number>;
export default function range(start: number, end: number): Iterable<number>;
export default function range(start: number, end: number, step: number): Iterable<number>;
export default function* range(arg0: number, arg1?: number, arg2?: number): Iterable<number> {
    if (arg1 == void 0) {
        arg1 = arg0;
        arg0 = 0;
    }

    if (arg2 == void 0)
        arg2 = arg1 > arg0 ? 1 : -1;
    
    const stop: Predicate<number> = arg2 > 0 ?
        x => x >= arg1! :
        x => x <= arg1!;

    let num = arg0;

    while (!stop(num)) {
        yield num;
        num += arg2;
    }
}