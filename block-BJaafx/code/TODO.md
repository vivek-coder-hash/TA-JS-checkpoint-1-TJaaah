1. Using loops take 10 inputs from user and find the average of all the numbers.

let n =Number(prompt("Enter a number))

let sum =0

for (i=1 ; i<=n ; i++) {
  sum=sum+i
}
console.log(sum/n)

2. What will be the output of the code below

```js
let i = 0;
while (i < 3) {
  println('hi');
  i++;
}

//  hi for three times
```

3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.
``` js

function getEvensum(max=10) {
  let sum =0

  for (i=0 ; i<=max ; i++) {
    if(i % 2==0) {
      sum=sum+i
    }
  }

}
```

4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.

``` js

function getEvensum(max=10) {
  let sum =0

  for (i=0 ; i<=max ; i++) {
    if(i % 2==0) {
      sum=sum+i
    }
  }

}
```

5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.



- If the input value is less than 0 return `not a valid input`
- For example if the input is `123` output should be `6`.


``` js

/*index.js*/
```

6. What will be the output of the following code below in multiple conditions? Explain with reason?

```js
function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // output    'Bigger than 5'
check(1); // output      'Smaller than 5'  
check(5); // output       5
```

7. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // what will be the output   //  'You are arya'
getOutput('John'); // what will be the output   //  'You are john'
getOutput(); // what will be the output  // 'Who are you'
```

8. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === 'Arya') console.log('You are arya');
  if (name === 'John') console.log('You are john');
  return 'Who are you';
}

getOutput('Arya'); // what will be the output //     'You are arya'
getOutput('John'); // what will be the output  //     'You are john'
getOutput(); // what will be the output    //  'who are you'
```

9. Can a function have multiple return statement? Give one example if possible and explain the reason.

function cannot have multiple return statement .    we can write more than one return in if and else statement.


10. What is the difference between `for` loop and `while` loop. What are the different place you can use them? Explain with example.

The 'for' loop used only when we already knew the number of iterations. The 'while' loop used only when the number of iteration are not exactly known. If the condition is not put up in 'for' loop, then loop iterates infinite times. ... In 'while' loop, the iteration statement can be written anywhere in the loop.
