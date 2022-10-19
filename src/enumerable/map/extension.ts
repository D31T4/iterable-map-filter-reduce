import Enumerable from "../base";
import MapEnumerable from ".";

declare global {
    interface Map<K, V> {
        toEnumerable(this: Map<K, V>): Enumerable<[K, V]>
    }
}

Map.prototype.toEnumerable = function<K, V>(this: Map<K, V>): Enumerable<[K, V]> {
    return new MapEnumerable(this);
}