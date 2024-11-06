import { DataNode } from "../Types";

type trio = -1 | 0 | 1;

export interface IStructure<T> {
    search(item: T): number | null;
    insert(item: T): trio;
    delete(item: T): trio;
    minimum(): T | null;
    maximum(): T | null;
    getArray(): (T | null)[];
}
