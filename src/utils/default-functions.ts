import { Tautology } from "src/types";

const tautology: Tautology = () => true;

function defaultCompare<T>(elm1: T, elm2: T): boolean {
    return elm1 === elm2;
}

export { tautology, defaultCompare };