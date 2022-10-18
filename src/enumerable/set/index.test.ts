import 'jest';
import range from '../../utils/range';
import SetEnumerable from '.';

describe(SetEnumerable, () => {
    describe(SetEnumerable.prototype.count, () => {
        it('should return no. of elements', () => {
            expect(new SetEnumerable(new Set(range(10))).count()).toBe(10); 
        });
    });

    describe(SetEnumerable.prototype.distinct, () => {
        const inst = new SetEnumerable(new Set());
        expect(inst.distinct()).toBe(inst);
    });

    describe(SetEnumerable.prototype.includes, () => {
        it('should return true if the set contains the element', () => {
            expect(new SetEnumerable(new Set(range(10))).includes(0)).toBe(true); 
            expect(new SetEnumerable(new Set(range(10))).includes(-1)).toBe(false); 
        });
    });
});