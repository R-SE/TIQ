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

 