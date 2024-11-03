export type Node<T> = {
    value: T | null,
    next: Node<T> | null,
}