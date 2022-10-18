
export type Predicate<T> = (item: T) => boolean;

export type Tautology = (...args: any[]) => true;

export type Comparer<T> = (elm1: T, elm2: T) => boolean;