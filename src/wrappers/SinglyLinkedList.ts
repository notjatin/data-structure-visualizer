import { Node } from "./Node";

export class SinglyLinkedList<T> {
    private node: Node<T>;
    private size: number;

    constructor() {
        this.node = {
            value: null,
            next: null,
        };
        this.size = 0;
    }

    insert(value: T) {
        const newNode = this.createNewNode(value);
        let head = this.node;

        if (this.size === 0) {
            this.node = newNode;
            return;
        }
        for (let i = 0; i < this.size; i++) {
            if (head.next === null) {
                head.next = newNode;
            } else {
                head = head.next;
            }
        }
    }

    delete(value: T) : number {
        let head = this.node;

        if (this.size === 0) {
            console.error("Underflow!");
            return -1;
        }
        for (let i = 0; i < this.size; i++) {
            if (head.next && head.next.value === value) {
                head.next = head.next.next;
            } else {
                // it seems it isn't being copied but referenced
                // focus on copying it as a whole, each key: pair
                head = Object.assign(head.next);
            }
        }
        return 1;
    }

    private createNewNode(value: T): Node<T> {
        const newNode: Node<T> = {
            value: value,
            next: null,
        };
        return newNode;
    }
}
