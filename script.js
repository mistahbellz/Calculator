let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

let firstNumber = 0;
let secondNumber = 0;
let operator = "";


function operate (a,b,c){
   return c(a,b)
}


express = operate(3,2,add)

console.log(`And the returned value is ${express}`)

