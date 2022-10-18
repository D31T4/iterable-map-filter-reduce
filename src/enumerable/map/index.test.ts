import 'jest';
import range from '../../utils/range';
import MapEnumerable from '.';

describe(MapEnumerable, () => {
    const map = new Map(
        [...range(10)].map(x => [x, x])
    );

    describe(MapEnumerable.prototype.count, () => {
        it('should return no. of elements', () => {
            expect(new MapEnumerable(map).count()).toBe(map.size);
        });
    });

    describe(MapEnumerable.prototype.distinct, () => {
        it('should return itself', () => {
            const inst = new MapEnumerable(map);
            expect(inst.distinct()).toBe(inst);
        });
    });

    describe(MapEnumerable.prototype.includesKey, () => {
        it('should return whether the map contains a key', () => {
            expect(new MapEnumerable(map).includesKey(0)).toBe(true);
            expect(new MapEnumerable(map).includesKey(-1)).toBe(false);
        });
    });

    describe(MapEnumerable.prototype.includes, () => {
        it('should return whether the map contains a key and compare the value', () => {
            expect(new MapEnumerable(map).includes([0, 0])).toBe(true);
            expect(new MapEnumerable(map).includes([0, 1])).toBe(false);
    
            expect(new MapEnumerable(map).includes([1, 0])).toBe(false);
            expect(new MapEnumerable(map).includes([-1, 0])).toBe(false);
        });
    });
});