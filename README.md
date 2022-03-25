# iterable-map-filter-reduce
map, filter, reduce for JavaScript iterables.

# Usage

```typescript

const arrayIterable = Iterator.from([1, 2, 3])
    .filter(x => x > 1)
    .map(x => 2 * x);


const objectIterable = Iterator.from({ x: 1, y: 2, z: 3 });

```
