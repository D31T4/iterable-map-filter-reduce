import 'jest';
import { sequenceEqual } from '../../utils';
import range from '../../utils/range';
import ArrayEnumerable from '.';

describe(ArrayEnumerable, () => {
    describe(ArrayEnumerable.prototype.first, () => {
        it('should return 1st element', () => {
            expect(new ArrayEnumerable([...range(10)]).first()).toBe(0);
        });

        it('should return undefined if empty', () => {
            expect(new ArrayEnumerable([]).first()).toBe(undefined);
        });
    });

    describe(ArrayEnumerable.prototype.last, () => {
        it('should return last item', () => {
            expect(new ArrayEnumerable([...range(10)]).last()).toBe(9);
        });

        it('should return undefined if empty', () => {
            expect(new ArrayEnumerable([]).last()).toBe(undefined);
        });
    });

    describe(ArrayEnumerable.prototype.count, () => {
        it('should return the no. of elements', () => {
            expect(new ArrayEnumerable([...range(10)]).count()).toBe(10);
            expect(new ArrayEnumerable([]).count()).toBe(0);
        });
    });

    describe(ArrayEnumerable.prototype.reverse, () => {
        it('should reverse', () => {
            expect(sequenceEqual(
                new ArrayEnumerable([0, 1, 2, 3]).reverse(),
                [3, 2, 1, 0]
            )).toBe(true);
        });
    });
});