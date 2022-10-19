import type { Predicate } from "src/types";

/**
 * generate a sequence of numbers from 0 to `end` step by `1 | -1`.
 * @param end 
 */
export default function range(end: number): Iterable<number>;
/**
 * generate a sequence of numbers from `start` to `end` step by `1 | -1`.
 * @param start
 * @param end 
 */
export default function range(start: number, end: number): Iterable<number>;
/**
 * generate a sequence of numbers from `start` to `end`.
 * @param start
 * @param end 
 * @param step
 */
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