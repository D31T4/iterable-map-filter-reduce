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
