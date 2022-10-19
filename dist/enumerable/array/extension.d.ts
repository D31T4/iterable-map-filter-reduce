import Enumerable from "../base";
declare global {
    interface Array<T> {
        toEnumerable(this: Array<T>): Enumerable<T>;
    }
}
