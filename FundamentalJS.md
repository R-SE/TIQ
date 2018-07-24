## JavaScript Fundamentals

1. What is a closure?
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

2. Explain the use cases for `call`, `bind`, and `apply`
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

3. What is hoisting?
4. Explain the keyword `this`
5. Explain the difference between `let`, `const`, and `var`
6. What is type coercion?
7. What is an IIFE?
8. Explain the event loop
9.  Explain event delegation
10. Explain functions as first-class objects
11. 