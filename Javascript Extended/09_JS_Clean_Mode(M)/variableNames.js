//Don't enforce the need for memorizing the variable context

//bad:
const products = ["T-Shirt", "Shoes", "Watches", "Bags"];

products.forEach(p => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  // ...
  // What is `p` for?
  register(p);
});

//good:
const products1 = ["T-Shirt", "Shoes", "Watches", "Bags"];

products.forEach(product => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  register(product);
});