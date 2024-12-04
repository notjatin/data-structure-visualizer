class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
    return this;
  }

  pop() {
    this.items.pop();
    return this;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  getItems() {
    return [...this.items];
  }
}

const stackMethods = {
  insert: (stack: Stack<number>, item: number) => stack.push(item),
  delete: (stack: Stack<number>) => stack.pop(),
  search: (stack: Stack<number>, item: number) =>
    stack.getItems().includes(item),
  update: (stack: Stack<number>, index: number, value: number) => {
    const items = stack.getItems();
    items[index] = value;
    return new Stack<number>().push(...items);
  },
};
