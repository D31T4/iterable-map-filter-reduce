export declare type Predicate<T> = (item: T) => boolean;
export declare type Tautology = (...args: any[]) => true;
export declare type EqualityComparer<T> = (elm1: T, elm2: T) => boolean;
export declare type Comparer<T> = (elm1: T, elm2: T) => number;
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type uint = number;
