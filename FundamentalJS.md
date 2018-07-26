# JavaScript Fundamentals

## 1. What is a closure?
  - occurs when a function isn't self-contained, and instead uses a variable outside of its scope
    - e.g. when writing a class in functional instantiation pattern to privatize the variables within
  - the combination of a function plus its outer context (the variables it relies on and has access to); this will contribute to the *execution context* or environment a function executes in
  
  <figure>
  <figcaption>Figure 1a: Closure created by getDelay() execution context bundled with the startTime variable located outside of the getDelay function</figcaption>

  <a href="https://www.youtube.com/watch?v=rBBwrBRoOOY"><img src="https://i.gyazo.com/9fc6015ffc07a195ef9b333269e6c1fa.png" width="400px" title="click for Understanding Closures YT video"/></a>
  </figure>

  <figure>
  <figcaption>Figure 1b: DevTools shows the closure created by addAgain and variable b </figcaption>

  <img src="https://i.gyazo.com/e2b824961d6aeaf3e9e8d527238ddbed.png" title="closure property in Chrome Dev Tools" />
  </figure>

## 2. Explain the use cases for `call`, `bind`, and `apply`
  - All three are methods that let you use methods from one object, in the context of another object
```
const myMethods = {
  name: 'anonymous',
  sayHello: function(age, emoji) {
    console.log(`Hello, I'm ${this.name} and ${age} years old ${emoji}`);
  }
}

const me = {
  name: 'Rose'
}

myMethods.sayHello(10, ':)'); // Hello, anonymous!
/* All three methods below output "Hello, I'm Rose and 25 years old :D" */
myMethods.sayHello.call(me, 25, ':D');
myMethods.sayHello.apply(me, [25, ':D']);
const sayHelloRose = myMethods.sayHello.bind(me);
sayHelloRose(25, ':D');
```

- `call` and `apply` immediately invoke the function in the context of the first argument passed to them, whereas bind will return a new function with its first argument bound to `this`, and can be invoked with arguments later.
- `call` receives the arguments that the method is invoked with as comma-separated values, whereas `apply` receives them as an array

## 3. What is hoisting?
- Hoisting explains the behavior seen when attempting to use a variable before being it's defined (initialized with a value), resulting in the value being undefined. In other words, you can picture the JS parser "hoisting" or pulling variable declarations to the top of their lexical scope, so you won't get a reference error, but do get unexpected behavior. *e.g.*
```
console.log(a); // undefined
console.log(b); // Reference Error
var a = 10;
console.log(a); // 10
``` 
- Why does this occur? Because according to ECMAScript Standard, variables are created upon entering an execution scope and initialized to undefined when created. Only when the variable assignment statement is reached does the "real" value of the variable get assigned
- Note: variable declarations get hoisted and their definitions are left in place, but function declarations and definitions occur at the same time, so both are hoisted. Also, be careful with the naming of variables, because function declarations can be overwritten by other variables of the same name
- Takeaway: best practice is to declare at the top of their scopes, to avoid confusion
  
4. What is type coercion?
- Type coercion or typecasting is the process of converting a value from one type to another. The JS parser performs implicit type coercion in a few cases, such as when using operators like `==` (loose equality), `+`, `||`, `!!`, or being triggered by the surrounding context like `if (value) {...}`. In most cases, it's best to eschew implicit type coercion in order to avoid confusion, unless it's readable. Instead, use explicit type coercion by writing the appropriate code like `Number(value)` or `Boolean(value)`.
- There are only three types of type coercion: to string, to boolean, and to number.
- Converting to string is straightforward as expected
- When converting to boolean, there are only 6 falsy values; everything else is truthy
- 
1. Explain the keyword `this`
2. Explain the difference between `let`, `const`, and `var`
3. What is an IIFE?
4. Explain the event loop
5.  Explain event delegation
6.  Explain functions as first-class objects
7.  