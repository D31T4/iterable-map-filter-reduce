# iterable-map-filter-reduce

[![Version](https://img.shields.io/npm/v/@d31t4/linq.ts)](https://img.shields.io/npm/v/@d31t4/linq.ts)

LINQ for JavaScript iterables.

# Usage

```typescript

const arrayIterable = Enumerable.from([1, 2, 3])
    .filter(x => x > 1)
    .map(x => 2 * x);


const objectIterable = Enumerable.from({ x: 1, y: 2, z: 3 });

```
