import Enumerable from "../base";
import SetEnumerable from ".";
import { EqualityComparer } from "../../types";

declare global {
    interface Set<T> {
        toEnumerable(this: Set<T>): Enumerable<T>
    }
}

Set.prototype.toEnumerable = function<T>(this: Set<T>): Enumerable<T> {
    return new SetEnumerable(this);
}

const originalDistinct = Enumerable.prototype.distinct;
Enumerable.prototype.distinct = function<T>(this: Enumerable<T>, compare?: EqualityComparer<T>): Enumerable<T> {
    return compare ?
        originalDistinct.call(this, compare) :
        new Set<T>(this).toEnumerable();
}