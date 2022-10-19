import 'jest';
import range from '../../utils/range';
import Enumerable from '.';
import { sequenceEqual } from '../../utils';

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

    describe(Enumerable.prototype.all, () => {
        it('should return true if all elements evaluate to true', () => {
            expect(new Enumerable([]).all()).toBe(true);
            expect(new Enumerable([0, 1, 2]).all()).toBe(false);
            expect(new Enumerable([1, 2, 3]).all()).toBe(true);
        });

        it('should return true if all element satisfies a predicate', () => {
            expect(new Enumerable(array).all(x => x >= 0)).toBe(true);
            expect(new Enumerable(array).all(x => x >= 1)).toBe(false);
            expect(new Enumerable(array).all(x => x < 0)).toBe(false);
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

        it('should return distinct elements', () => {
            const dups = [{ x: 0 }, { x: 0 }, ...array.map(x => ({ x })), { x: 9 }];

            const distinct = [...new Enumerable(dups).distinct((a, b) => a.x === b.x).map(obj => obj.x)];

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

    describe(Enumerable.prototype.reverse, () => {
        it('should reverse the order of elements in the sequence', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).reverse(),
                [2, 1, 0]
            )).toBe(true);
        });
    });

    describe(Enumerable.prototype.skip, () => {
        it('should return an empty sequende if n > no. of elements', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).skip(4),
                []
            )).toBe(true);
        });

        it('should return an empty sequende if n = no. of elements', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).skip(3),
                []
            )).toBe(true);
        });

        it('should skip n elements', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).skip(1),
                [1, 2]
            )).toBe(true);
        });
    });

    describe(Enumerable.prototype.limit, () => {
        it('should return the same sequence if no. of elements < n', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).limit(100),
                [0, 1, 2]
            )).toBe(true);
        });

        it('should return a shorted sequence if n < no. of elements', () => {
            expect(sequenceEqual(
                new Enumerable([0, 1, 2]).limit(2),
                [0, 1]
            )).toBe(true);
        });
    });

    describe(Enumerable.prototype.count, () => {
        it('should return no. of elements', () => {
            expect(new Enumerable([0, 1, 2]).count()).toBe(3);
        });

        it('should return no. of elements satisfying the predicate', () => {
            expect(new Enumerable([0, 1, 2]).count(x => x > 2)).toBe(0);
            expect(new Enumerable([0, 1, 2]).count(x => x >= 1)).toBe(2);
        });
    });
});