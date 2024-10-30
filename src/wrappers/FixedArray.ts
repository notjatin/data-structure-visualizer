export class FixedArray<T> {
    private elements: T[];
    private size: number;
    private capacity: number;

    constructor(initialCapacity: number) {
        this.size = 0;
        this.capacity = initialCapacity;
        this.elements = new Array(this.capacity).fill(null);
    }

    // search with an index
    getElementAt(index: number): T {
        this.validateIndex(index);
        return this.elements[index];
    }

    // insert at an index
    setElementAt(index: number, value: T): void {
        this.validateIndex(index);
        this.elements[index] = value;
    }

    // resize the array once size and capacity become equal
    push(value: T): void {
        if (this.size >= this.capacity) {
            this.resize();
        }
        this.elements[this.size] = value;
        this.size++;
    }

    getAllElements(): T[] {
        return [...this.elements];
    }

    // get the current size
    getSpace(): number {
        return this.capacity - this.size;
    }

    private validateIndex(index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error(`Index out of bounds: ${index}`);
        }
    }

    private resize(): void {
        this.capacity *= 2;
        const newElements = new Array(this.capacity).fill(null);
        for (let i = 0; i < this.size; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
    }
}
