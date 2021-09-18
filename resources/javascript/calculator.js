// Importing html elements
const output = document.getElementById('output');
const clear = document.getElementById('clearAll');
const equals = document.getElementById('equals');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const zero = document.getElementById('in0');
const one = document.getElementById('in1');
const two = document.getElementById('in2');
const three = document.getElementById('in3');
const four = document.getElementById('in4');
const five = document.getElementById('in5');
const six = document.getElementById('in6');
const seven = document.getElementById('in7');
const eight = document.getElementById('in8');
const nine = document.getElementById('in9');
const dot = document.getElementById('inDecimal');

// limiting to 18 digits to prevent overflow.
const maxDigits = 18;
// this is to get rid of the default 0 in the output.
let clicked = false;
let awaitEquals;

// variables for total input
let input1 = '';
let input2 = '';
let funcType = '';

// equals main function
function equate(first, second, operator) {
    // handle empty values
    if (first === '' || second === '') {
        return "Error";
    }
    // convert inputs to numbers
    let numInput1 = Number(input1);
    let numInput2 = Number(input2);
    // run operations
    switch (operator) {
        case '/':
            return numInput1 / numInput2;
        case '*':
            return numInput1 * numInput2;
        case '-':
            return numInput1 - numInput2;
        case '+':
            return numInput1 + numInput2;
        default:
            return "Operator Error";
    }   

}

// function buttons
clear.addEventListener('click', () => {
    output.innerHTML = '0';
    clicked = false;
    input1 = '';
    input2 = '';
    funcType = '';
});

divide.addEventListener('click', () => {
    if (input1 !== '' && input2 !== '') {
        input1 = equate(input1, input2, funcType);
    } else {
        input1 = output.innerHTML;
    }
    output.innerHTML = '/';
    clicked = false;
    awaitEquals = true;
    funcType = '/';
});

multiply.addEventListener('click', () => {
    if (input1 !== '' && input2 !== '') {
        input1 = equate(input1, input2, funcType);
    } else {
        input1 = output.innerHTML;
    }
    awaitEquals = true;
    output.innerHTML = '*';
    clicked = false;
    funcType = '*';
});

subtract.addEventListener('click', () => {
    if (input1 !== '' && input2 !== '') {
        input1 = equate(input1, input2, funcType);
    } else {
        input1 = output.innerHTML;
    }
    awaitEquals = true;
    output.innerHTML = '-';
    clicked = false;
    funcType = '-';
});

add.addEventListener('click', () => {
    if (input1 !== '' && input2 !== '') {
        input1 = equate(input1, input2, funcType);
    } else {
        input1 = output.innerHTML;
    }
    awaitEquals = true;
    output.innerHTML = '+';
    clicked = false;
    funcType = '+';
});

equals.addEventListener('click', () => {
    console.log(`${input1} ${input2}`);
    if (awaitEquals) {
        input2 = output.innerHTML;
    }
    if (input1 && input2) {
        output.innerHTML = equate(input1, input2, funcType);
        clicked = false;
    }
    awaitEquals = false;
    input1 = output.innerHTML;
});


// number buttons
zero.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '0';
    }
});

one.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '1';
    }
});

two.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '2';
    }
});

three.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '3';
    }
});

four.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '4';
    }
});

five.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '5';
    }
});

six.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '6';
    }
});

seven.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '7';
    }
});

eight.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '8';
    }
});

nine.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '9';
    }
});

dot.addEventListener('click', () => {
    if (clicked === false) {
        output.innerHTML = '';
        clicked = true;
    }
    if (output.innerHTML.length < 18) {
        output.innerHTML += '.';
    }
});