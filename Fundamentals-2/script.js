'use script';
 /*Strict mode is a JavaScript feature that makes the interpreter more strict with JavaScript syntax reducing the likelihood of mistakes in your code

 FUNCTIONS 
-- A variable holds value .
-- A function can hold one or more complete lines of code.




function logger(){
    console.log('My name is Amardeep');
}

logger(); // calling / running or invoking function 
logger();


function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}  //here apple and oranges are parameters

fruitProcessor(5,0);
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(8,2));

const appleOrangesJuice = fruitProcessor(2,4);
console.log(appleOrangesJuice);

// function to add two numbers 

// function addNumbers(a,b){
//     return a + b;
// }

// let result = addNumbers(4,5);
// console.log(result);

// function to multiply three numbers 

function multiply(a,b,c){
    return a* b * c;
}

let result = multiply(2,3,4);
console.log(result);



// function declaration
function calcAge1(birthYear){
    const age = 2024 - birthYear;
    return age;
    //or we can simply write ->  return 2024 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1); 



// function expression 
const calcAge2 = function (birthYear){
    return 2024 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

*/


//Arrow Function

const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 65- age ;
    return retirement;
}

console.log(yearsUntilRetirement(1991)); 


hello = () => console.log("Hello World!");
hello();