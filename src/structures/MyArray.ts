import { IStructure } from "../contracts/IStructure";

export class MyArray<T> implements IStructure<T> {
    private array: (T | null)[];
    private position: number;

    constructor(initialSize: number) {
        this.array = new Array(initialSize).fill(null);
        this.position = 0;
    }
    getArray(): (T | null)[] {
        return this.array;
    }
    minimum(): T | null {
        let minimum: T | null = null;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== null) {
                if (minimum === null || this.array[i]! < minimum!) {
                    minimum = this.array[i];
                }
            }
        }

        return minimum;
    }
    maximum(): T | null {
        let maximum: T | null = null;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== null) {
                if (maximum === null || this.array[i]! > maximum!) {
                    maximum = this.array[i];
                }
            }
        }

        return maximum;
    }
    search(item: T): number | null {
        // could find a better approach to return
        const index = this.array.indexOf(item);

        if (index < 0) return null;
        return index;
    }

    insert(item: T): 0 | 1 | -1 {
        if (item === null || this.array.includes(item)) {
            // return as soon as the item is 0 or a duplicate
            return -1;
        } else if (this.position === this.array.length) {
            // if position coincides with the last element
            return 0;
        } else {
            // after edge cases have been handled
            this.array[this.position] = item;
            this.position++;
            return 1;
        }
    }

    delete(item: T): 0 | 1 | -1 {
        if (this.position === 0) {
            // return if array is empty or doesn't include the item
            return -1;
        }

        if (this.array.includes(item)) {
            const itemIndex = this.array.indexOf(item);
            this.array[itemIndex] = null;
            return 1;
        }

        return -1;
    }
}
