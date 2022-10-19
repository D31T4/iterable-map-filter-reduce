import { Tautology } from "src/types";

const tautology: Tautology = () => true;

function defaultCompare<T>(elm1: T, elm2: T): boolean;
function defaultCompare(elm1: any, elm2: any): boolean;
function defaultCompare(elm1: any, elm2: any): boolean {
    return elm1 === elm2;
}

export { tautology, defaultCompare };