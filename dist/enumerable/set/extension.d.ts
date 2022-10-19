import Enumerable from "../base";
declare global {
    interface Set<T> {
        toEnumerable(this: Set<T>): Enumerable<T>;
    }
}
