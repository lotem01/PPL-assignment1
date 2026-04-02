## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
   Answer: A program is written as a sequence of commands that tell the computer exactly what to do step by step. The state of the program changes as each command runs.
   1. [5 points] Object Oriented
   Answer: A program is built from objects that contain data and functions (methods). These objects interact with each other, and each object is responsible for its own behavior.
   1. [5 points] Functional
   Answer: A program is built by expressions (Also the functions). Instead of changing data step by step, we compute results by applying functions to values.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
Answer: Object oriented programming improves over imperative programming by organizing code into objects, which makes large programs easier to structure, reuse, and maintain. It reduces repetition by allowing us to define classes and reuse them for many similar cases. It also makes the code easier to understand because data and the operations on that data are grouped together.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
Answer: Functional programming improves over object oriented programming by encouraging simpler code. Functions usually do one clear task, and we avoid changing shared state, so the code is easier to test, verify, and optimize. This style also works well with asynchronous computations.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

Answer: getDiscountedProductAveragePriceFP
```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  const discountedPrices = inventory.filter(product => product.discounted).map(product => product.price);
  return discountedPrices.length === 0 ? 0 : discountedPrices.reduce((sum, price) => sum + price, 0) / discountedPrices.length;
};
```


### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
Answer: <T>(x: T[], y: (value: T) => boolean) => boolean
2. [3 points] `x => x.map(y => y * 2)`
Answer: (x: number[]) => number[]
3. [3 points] `(x, y) => x.filter(y)`
Answer: <T>(x: T[], y: (value: T) => boolean) => T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
Answer: (x: number[]) => number
5. [3 points] `(x, y) => x ? y[0] : y[1]`
Answer: <T>(x: boolean, y: T[]) => T
6. [3 points] `(f,g) => x => f(g(x+1))`
Answer: <A, B>(f: (arg: A) => B, g: (arg: number) => A) => (x: number) => B