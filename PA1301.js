// PART 1 – Common Errors
// Question 1

// Error type: Syntax Error
// Cause: The string "John is missing its closing double quote. JavaScript can't determine where the string literal ends, so the parser fails before the code even runs (SyntaxError: Invalid or unexpected token / "unterminated string").
// Fix: Add the missing closing double quote.
let username = "John";
console.log(username);

// Question 2

// Error Type: ReferenceError
// Cause: price was used before it was declared. JavaScript can't find it, so it throws a ReferenceError.
// Fix: Declare and give price a value before using it.
let price = 10;
let total = price + 5;
console.log(total);

// Question 3

// Error Type: TypeError
// Cause: toUpperCase() only works on strings, but number is a number.
// Fix: Convert the number to a string before using toUpperCase().
let number = 10;
console.log(number.toString().toUpperCase()); 

// PART 2 – Question 4
// 1–2. Run it / output:
// Total price is: NaN

// 3. Debug with console.log:

function calculateTotal(price, quantity) {
    console.log("price:", price);
    console.log("quantity:", quantity);
    return price * quantity;
}

let total = calculateTotal(10);
console.log("Total price is: " + total);

// Console output:

// price: 10
// quantity: undefined
// Total price is: NaN

// Question 4

// Why it's wrong: calculateTotal() needs two values, but only one was given. The second value becomes undefined, so the calculation results in NaN.
// Fix: Pass both required values when calling the function.

// Fix — pass both arguments:

function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(10, 5);
console.log("Total price is: " + total); 