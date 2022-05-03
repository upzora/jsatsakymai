/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;

let a = composition(one, four);
function composition(a, b) {
    return a + b;
  }
let b = division(four, two);
function division(a, b) {
    return a / b;
  }
  

let c = substraction(three, two);
function substraction(a, b) {
    return a - b;
  }
  
let d = multiplication(five, two);
function multiplication(a, b) {
    return a * b;
  }
  

console.log(a);
console.log(b);
console.log(c);
console.log(c);
