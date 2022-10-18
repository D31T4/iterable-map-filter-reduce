import 'jest';
import ObjectEnumerable from '.';

describe(ObjectEnumerable, () => {
    const object: Record<number, number> = {};

    for (let i = 0; i < 10; ++i)
        object[i] = i;

    describe(ObjectEnumerable.prototype.distinct, () => {
        it('should return itself', () => {
            const inst = new ObjectEnumerable(object);
            expect(inst.distinct()).toBe(inst);
        });
    });

    describe(ObjectEnumerable.prototype.includesKey, () => {
        it('should return whether the object contains a key', () => {
            expect(new ObjectEnumerable(object).includesKey(0)).toBe(true);
            expect(new ObjectEnumerable(object).includesKey(-1)).toBe(false);
        });
    });

    describe(ObjectEnumerable.prototype.includes, () => {
        it('should return whether the object contains a tuple', () => {
            expect(new ObjectEnumerable(object).includes([0, 0])).toBe(true);
            expect(new ObjectEnumerable(object).includes([0, 1])).toBe(false);

            expect(new ObjectEnumerable(object).includes([1, 0])).toBe(false);
            expect(new ObjectEnumerable(object).includes([-1, 0])).toBe(false);
        });
    });
});