import { Tautology } from "src/types";
declare const tautology: Tautology;
declare function defaultEqualityComparer<T>(elm1: T, elm2: T): boolean;
declare function defaultEqualityComparer(elm1: any, elm2: any): boolean;
export { tautology, defaultEqualityComparer };
