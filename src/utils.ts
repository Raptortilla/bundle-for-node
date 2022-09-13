import { flatten } from "lodash";

const addNumbers = (a: number, b: number): number => a + b;

const flattenArray = (arr: any[]): any[] => flatten(arr);

export { addNumbers, flattenArray };
