import 'jest';
import range from '../../utils/range';

import Enumerable from '../base';
import './extension';

describe(Enumerable.prototype.distinct.name, () => {
    const array = [...range(9)];

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