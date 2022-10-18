import 'jest';
import range from '../../utils/range';
import Enumerable from '.';

describe(Enumerable, () => {
    const array = [...range(10)];

    describe(Enumerable.prototype.first, () => {
        it('should return undefined when empty', () => {
            expect(new Enumerable([]).first()).toBe(undefined);
        });

        it('should return the 1st element', () => {
            expect(new Enumerable(array).first()).toBe(0);
        });

        it('should return undefined when no element satisfies the predicate', () => {
            expect(new Enumerable(array).first(x => x < 0)).toBe(undefined);
        });

        it('should return the 1st element satisfies the predicate', () => {
            expect(new Enumerable(array).first(x => x >= 1)).toBe(1);
        });
    });

    describe(Enumerable.prototype.last, () => {
        it('should return undefined when empty', () => {
            expect(new Enumerable([]).last()).toBe(undefined);
        });

        it('should return the last element', () => {
            expect(new Enumerable(array).last()).toBe(9);
        });

        it('should return undefined when no element satisfies the predicate', () => {
            expect(new Enumerable(array).last(x => x < 0)).toBe(undefined);
        });

        it('should return the 1st element satisfies the predicate', () => {
            expect(new Enumerable(array).last(x => x >= 1)).toBe(9);
        });
    });

    describe(Enumerable.prototype.includes, () => {
        it('should return whether an item exists', () => {
            expect(new Enumerable(array).includes(0)).toBe(true);
            expect(new Enumerable(array).includes(-1)).toBe(false);
        });
    });

    describe(Enumerable.prototype.any, () => {
        it('should return true if there are one or more elements', () => {
            expect(new Enumerable([]).any()).toBe(false);
            expect(new Enumerable(array).any()).toBe(true);
        });

        it('should return true if any element satisfies a predicate', () => {
            expect(new Enumerable(array).any(x => x > 5)).toBe(true);
            expect(new Enumerable(array).any(x => x < 0)).toBe(false);
        });
    });

    describe(Enumerable.prototype.distinct, () => {
        it('should return distinct elements', () => {
            const dups = [0, 0, ...array, 9];

            const distinct = [...new Enumerable(dups).distinct()];
    
            expect(distinct.length).toBe(10);
    
            for (let i = 0; i < distinct.length; ++i)
                expect(distinct[i]).toBe(i);
        });
    });

    describe(Enumerable.prototype.reduce, () => {
        it('should aggregate all items', () => {
            const linqSum = new Enumerable(array).reduce((curr, acc) => curr + acc, 0);
            const reduceSum = array.reduce((curr, acc) => curr + acc, 0);
    
            expect(linqSum).toBe(reduceSum);
        });
    });

    describe(Enumerable.prototype.map, () => {
        it('should transform all items', () => {
            for (const [i, num] of new Enumerable(array).map(x => x * 2).enumerate())
                expect(num).toBe(2 * i);
        });
    });

    describe(Enumerable.prototype.filter, () => {
        it('should return all items satisfying a predicate', () => {
            const nums = [...new Enumerable(array).filter(x => x < 5)];

            expect(nums.length).toBe(5);
    
            for (let i = 0; i < 5; ++i)
                expect(nums[i]).toBe(i);
        });
    });

    describe(Enumerable.prototype.forEach, () => {
        it('should fire a callback for every item in sequential order', () => {
            let index = 0;

            new Enumerable(array).forEach((item) => {
                expect(item).toBe(index);
                ++index;
            });
        });
    });

    describe(Enumerable.prototype.enumerate, () => {
        it('should enumerate elements of the sequence', () => {
            for (const [index, value] of new Enumerable(array).enumerate())
                expect(index).toBe(value);
        });
    });
});