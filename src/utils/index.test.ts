import 'jest';
import { isEnumerable, map, filter, reduce, sequenceEqual, zip } from '.';

describe(isEnumerable, () => {
    test('array is iterable', () => {
        expect(isEnumerable([])).toBe(true);
    });

    test('set is iterable', () => {
        expect(isEnumerable(new Set())).toBe(true);
    });

    test('map is iterable', () => {
        expect(isEnumerable(new Map())).toBe(true);
    });

    test('A is iterable', () => {
        class A {
            public [Symbol.iterator]() {
                return [];
            }
        }

        expect(isEnumerable(new A())).toBe(true);
    });

    test('object is not iterable', () => {
        expect(isEnumerable({})).toBe(false);
    });
});

describe(sequenceEqual, () => {
    test('empty sequences are equal', () => {
        expect(sequenceEqual([], [])).toBe(true);
    });

    test('one of the sequences is empty', () => {
        expect(sequenceEqual([], [0, 1, 2])).toBe(false);
    });

    test('comparison of sequences with equal length', () => {
        expect(sequenceEqual([0, 1, 2], [0, 1, 2])).toBe(true);
        expect(sequenceEqual([0, 1, 2], [0, 1, 1])).toBe(false);
    });

    test('comparison of sequences with different length', () => {
        expect(sequenceEqual([0, 1, 2], [0, 1])).toBe(false);
    });
});

describe(zip, () => {
    test('empty', () => {
        expect(sequenceEqual(
            zip([], []),
            []
        )).toBe(true);

        expect(sequenceEqual(
            zip([0, 1, 2, 3], []),
            []
        )).toBe(true);
    });

    test('sequence length equal', () => {
        expect(sequenceEqual(
            zip([0, 1, 2, 3], ['a', 'b', 'c', 'd']),
            [[0, 'a'], [1, 'b'], [2, 'c'], [3, 'd']],
            (a, b) => a[0] === b[0] && a[1] === b[1]
        ));
    });

    test('sequence length not equal', () => {
        expect(sequenceEqual(
            zip([0, 1, 2, 3], ['a', 'b', 'c']),
            [[0, 'a'], [1, 'b'], [2, 'c']],
            (a, b) => a[0] === b[0] && a[1] === b[1]
        ));
    });
});

describe(reduce, () => {
    test('reduce non-empty', () => {
        expect(reduce([0, 1, 2, 3], (value, sum) => sum + value, 0)).toBe(6);
    });

    test('reduce empty', () => {
        expect(reduce([], (value, sum) => sum + value, 10)).toBe(10);
    });
});

describe(map, () => {
    test('map non-empty', () => {
        expect(sequenceEqual(
            map([0, 1, 2, 3], x => 2 * x), 
            [0, 2, 4, 6]
        )).toBe(true);
    });

    test('map empty', () => {
        expect(sequenceEqual(
            map([], x => 2 * x), 
            []
        )).toBe(true);
    })
});

describe(filter, () => {
    test('filter non-empty', () => {
        expect(sequenceEqual(
            filter([0, 1, 2, 3], x => Boolean(x % 2)),
            [1, 3]
        )).toBe(true);
    });

    test('filter empty', () => {
        expect(sequenceEqual(
            filter([], x => Boolean(x % 2)),
            []
        )).toBe(true);
    });
});