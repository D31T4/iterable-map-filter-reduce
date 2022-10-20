import { Tautology } from "src/types";

const tautology: Tautology = () => true;

function defaultEqualityComparer<T>(elm1: T, elm2: T): boolean;
function defaultEqualityComparer(elm1: any, elm2: any): boolean;
function defaultEqualityComparer(elm1: any, elm2: any): boolean {
    return elm1 === elm2;
}

function* emptyGenerator<T>(): Generator<T, void> {}

export { tautology, defaultEqualityComparer, emptyGenerator };