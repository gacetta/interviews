class CallStack {
  #stack;
  constructor() {
    this.#stack = [];
  }
  add(func) {
    this.#stack.push(func);
  }
  execute(...args) {
    if (this.#stack.length === 0) throw new Error('no stack yo');
    const lastFunc = this.#stack.pop();
    return lastFunc(...args);
  }
  top() {
    if (this.#stack.length === 0) return null;
    const lastFunc = this.#stack[this.#stack.length - 1];
    console.log(lastFunc);
  }
}

const testStack = new CallStack();
console.log(testStack);
testStack.add(function add2(num) {return num + 2});
testStack.add((num) => num ** 2);
console.log(testStack);
testStack.add(function isOdd(num) {return num % 2 !== 0});
console.log(testStack);
testStack.top();
console.log(testStack.execute(9));
console.log(testStack);
console.log(testStack.execute(9));
console.log(testStack);
console.log(testStack.top());
console.log(testStack.execute(9));