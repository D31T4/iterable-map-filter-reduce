import 'jest';
import range from '.';
import { sequenceEqual } from '..';

describe(range, () => {
    test('empty', () => {
        expect(sequenceEqual(
            range(0, 0.1),
            [0]
        )).toBe(true);

        expect(sequenceEqual(
            range(0, 0),
            []
        )).toBe(true);

        expect(sequenceEqual(
            range(0),
            []
        )).toBe(true);
    });

    test('increasing', () => {
        expect(sequenceEqual(
            range(0, 3),
            [0, 1, 2]
        )).toBe(true);

        // translate right by 2 unit
        expect(sequenceEqual(
            range(3, 6),
            [3, 4, 5]
        )).toBe(true);

        // translate left by 10 unit
        expect(sequenceEqual(
            range(-5, -2),
            [-5, -4, -3]
        )).toBe(true);
    });

    test('decreasing', () => {
        expect(sequenceEqual(
            range(3, 0),
            [3, 2, 1]
        )).toBe(true);

        expect(sequenceEqual(
            range(6, 3),
            [6, 5, 4]
        )).toBe(true);

        // translate left by 10 unit
        expect(sequenceEqual(
            range(-2, -5),
            [-2, -3, -4]
        )).toBe(true);
    });

    test('step 2', () => {
        expect(sequenceEqual(
            range(0, 4, 2),
            [0, 2]
        )).toBe(true)
    });
});