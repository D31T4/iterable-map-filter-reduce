import Enumerable from "../base";
declare global {
    interface Map<K, V> {
        toEnumerable(this: Map<K, V>): Enumerable<[K, V]>;
    }
}
