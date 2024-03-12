// normal function 

function greet()
{
    console.log('Good night');
}
greet();

//Arrow Function

// syntax 
const gfg = () => {
    console.log('Hi geeks!');
}
gfg();

greet = ()=> {
    console.log('Good morning');
}
greet();


// arrow function  with parameters

const fun = (x,y,z) => {
    console.log(x+y+z);
}

fun(10,20,30);


// arrow function with defalt parameters

const fun1 = (x,y,z = 30)=>{
    console.log(x+" " + y + " " + z);
}
fun1(10,20);

/*
          Advantages of Arrow Functions
--Arrow functions reduce the size of the code.
--The return statement and function brackets are optional for single-line functions.
--It increases the readability of the code.
--Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing scope. This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.


Limitations of Arrow Functions
Arrow functions do not have the prototype property.
Arrow functions cannot be used with the new keyword.
Arrow functions cannot be used as constructors.
These functions are anonymous and it is hard to debug the code.
Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.
*/

const calcAge3 = birthYear => 2037 - birthYear;
const age3 =  calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`
// }

// console.log(yearsUntilRetirement(1991, 'Rishu'));
// console.log(yearsUntilRetirement(1980, 'Amar'));


// FUNCTION CALLING OTHER FUNCTIONS

function cutFruitsPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apple , oranges){
    const applePieces = cutFruitsPieces(apple);
    const orangePieces = cutFruitsPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2,3));







const mul = function (x,y){
    return x * y;
}
const multiply = mul(2,6);
console.log(multiply);

x= 4-'-4';
console.log(x);