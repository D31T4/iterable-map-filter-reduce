
/**a wrapper class wrapping vanilla Iterables */
class BaseIterator<TValue> implements Iterable<TValue> {
    /**inner iterable */
    protected iterable: Iterable<TValue>;
    
    /**get inner iterable */
    public get getIterable(): Iterable<TValue> {
        return this.iterable;
    }

    public [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }

    public constructor(iterable: Iterable<TValue>) {
        this.iterable = iterable;
    }

    public map<T2>(transformer: (elm: TValue) => T2): BaseIterator<T2> {
        return new BaseIterator(map<TValue, T2>(this.iterable, transformer));
    }

    public filter(predicate: (elm: TValue) => boolean): BaseIterator<TValue> {
        return new BaseIterator(filter(this.iterable, predicate));
    }

    public reduce<T2>(reducer: (elm: TValue, accumulator: T2) => T2, initiator: T2): T2 {
        return reduce(this.iterable, reducer, initiator);
    }

    public forEach(func: (elm: TValue) => void): void {
        for (const elm of this.iterable)
            func(elm);
    }

    public first(): TValue | undefined {
        for (const value of this.iterable)
            return value;

        return undefined;
    }

    public last(): TValue | undefined {
        let last: TValue | undefined = undefined;

        for (const value of this.iterable)
            last = value;

        return last;
    }

    public includes(elm: TValue): boolean {
        for (const value of this.iterable)
            if (elm === value)
                return true;

        return false;
    }

    public count(): number {
        return this.reduce((_, accumulator) => accumulator + 1, 0);
    }

    public toArray(): TValue[] {
        return [...this];
    }
}

export default BaseIterator;

function* map<T1, T2>(iterable: Iterable<T1>, transformer: (elm: T1) => T2): Iterable<T2> {
    for (const elm of iterable)
        yield transformer(elm);
}

function* filter<T>(iterable: Iterable<T>, predicate: (elm: T) => boolean): Iterable<T> {
    for (const elm of iterable)
        if (predicate(elm))
            yield elm;
}

function reduce<TElm, TRed>(iterable: Iterable<TElm>, reducer: (elm: TElm, accumulator: TRed) => TRed, initiator: TRed): TRed {
    let accumulator: TRed = initiator;
        
    for (const elm of iterable)
        accumulator = reducer(elm, accumulator);

    return accumulator;
}