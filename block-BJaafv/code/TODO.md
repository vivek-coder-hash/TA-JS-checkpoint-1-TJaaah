1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```
Answer:   first will return a+b  ,  second is printing sum of a+b  but it will return undefined  .

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.
Answer :  value of first will be a+b  , but second will be undefined  .

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?

Answer :  sum will be 36 because we are passing two parameters in sum function . so , third argument will not make any changes.
4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

Answer : yes we can store . Because we can defined function as expression . where function stored as expression in variable sum .

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

function sayHello(name) {
  let name = "Hello Arya"
  return `${name}`

}

6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();  //    "Hello, John"      , because  username variable has global scope and function can access it .
```

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // Output 1   'John'

showMessage(); // Output 2  "Hello, John"

alert(userName); // Output 3     'John'
```

8. What is a Anonymous Function give example of three functions.

Answer : where function has no name .   for example:   const add  = function (x,y)  {return x+y};   const sub  = function (x,y)  {return x-y} ; const mul  = function (x,y)  {return x*y}

9. Can function declaration be a Anonymous Function? Explain
No , because we cannot call function if it's declaration does not have name .

Answer : 

10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```

Answer :  function addNumber(a,b) {
  return a+b
}

addNumber(10,20)

function subtractNumber(a,b) {
  return a-b
}

subtractNumber(10,20)


function checktype(a) {
  return typeof a
}

function get(a) {
  return a
}