export type Predicate<T> = (item: T) => boolean;

export type Tautology = (...args: any[]) => true;

export type EqualityComparer<T> = (elm1: T, elm2: T) => boolean;

export type Comparer<T> = (elm1: T, elm2: T) => number;

export type Constructor<T> = new (...args: any[]) => T;

export type uint = number;