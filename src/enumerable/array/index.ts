import { tautology } from "../../utils/default-functions";
import type { Predicate, uint } from "../../types";
import Enumerable from "../base";

import './extension';

/**wrapper class for objects */
class ArrayEnumerable<T> extends Enumerable<T> {
    declare protected readonly internalEnumerable: T[];

    public constructor(array: T[]) {
        super(array);
    }

    public any(): boolean;
    public any(predicate: Predicate<T>): boolean;
    public any(predicate?: Predicate<T>): boolean {
        return predicate ?
            super.any(predicate) :
            this.internalEnumerable.length > 0;
    }

    public count(): uint;
    public count(predicate: Predicate<T>): uint;
    public count(predicate?: Predicate<T>): uint {
        return predicate ?
            super.count(predicate) :
            this.internalEnumerable.length;
    }

    public first(): T | void;
    public first(predicate: Predicate<T>): T | void;
    public first(predicate?: Predicate<T>): T | void {
        return predicate ?
            super.first(predicate) :
            this.internalEnumerable[0];
    }

    public last(): T | void;
    public last(predicate: Predicate<T>): T | void;
    public last(predicate?: Predicate<T>): T | void {
        predicate ??= tautology;

        for (let i = this.internalEnumerable.length - 1; i >= 0; --i)
            if (predicate(this.internalEnumerable[i]))
                return this.internalEnumerable[i];

        return undefined;
    }

    public elementAt(index: number): void | T {
        return index >= 0 && index < this.internalEnumerable.length ?
            this.internalEnumerable[index] :
            undefined;
    }

    public reverse(): Enumerable<T> {
        return new Enumerable(
            reverse(this.internalEnumerable)
        );
    }

    public skip(n: uint): Enumerable<T> {
        return new Enumerable(
            skip(this.internalEnumerable, n)
        );
    }
}

export default ArrayEnumerable;

function* skip<T>(seq: T[], n: uint): Iterable<T> {
    for (let i = n; i < seq.length; ++i)
        yield seq[i];
}

function* reverse<T>(seq: T[]): Iterable<T> {
    for (let i = seq.length - 1; i >= 0; --i)
        yield seq[i];
}