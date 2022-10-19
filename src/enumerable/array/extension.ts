import { Comparer } from "../../types";
import ArrayEnumerable from ".";
import Enumerable from "../base";

declare global {
    interface Array<T> {
        toEnumerable(this: Array<T>): Enumerable<T>
    }
}

Array.prototype.toEnumerable = function<T>(this: Array<T>): Enumerable<T> {
    return new ArrayEnumerable(this);
}

Enumerable.prototype.reverse = function<T>(this: Enumerable<T>): Enumerable<T> {
    return new ArrayEnumerable([...this].reverse());
}

Enumerable.prototype.sort = function<T>(this: Enumerable<T>, comparer?: Comparer<T>): Enumerable<T> {
    return new ArrayEnumerable([...this].sort(comparer));
}