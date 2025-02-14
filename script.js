// Initialize global variables
let a = 0;
let b = 0;
let operator = '';

function add (a, b) {
    return a + b;
};
  
function substract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function devide (a, b) {
    return a / b;
};

function operate(a, b, operator) {
     if (operator == '+') {
        add(a, b);
     } else if(operator == '-') {
        substract(a, b);
     } else if(operator == '*') {
        multiply(a, b);
     } else {
        multiply(a, b);
     }
}