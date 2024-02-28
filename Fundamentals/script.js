let js = 'amazing';
if(js === 'amazing') console.log('Javascript is FUN!');
console.log(40+8 +23 -10);
console.log('Rishu');

// variables

let firstName = "Rishu";
let lastName = "Verma";
console.log(firstName+" "+lastName);

// variables name cannot start with numbers, reserved words.
// variables name can only contain letters,underscores or the dollar $ sign.

//let first@name = "Rishu"; --> Wrong 
//let first_name = "Rishu"; --> COrrect 
//let new = 25; Will throw error because new is a reserved word.

// exception --> let name = "Rishu"; Here name is a reserved word but it will not throw error.
// still we never use "name " as our variable name because it is not a good practice.

// also we should not use Uppercase in variable name 
// let Person = "Jonas";  -- > avoid this 
// we will use uppercase for constants ex- let PI = 3.14;

/*
DATA TYPES 

#Primitive Data Types
  1.Number : Floating point numbers Used for decimals and integers ex - let age = 24;
  
  2.String : Sequence of characters Used for text . Ex- let firstName = "Rishu";

  3.Boolean : It has two values true/false. let fullAge = true;

  4.Undefined : Value taken by a variable that is not defined ('empty value')  let children;

  5.Null : Also means 'empty value'

  6.Symbol (ES2015): Value that is unique and cannot be changed .
  
  7.BigInt(ES2020) : Larger integers that the Number type can hold.
   
    NOTE - JavaScript has dynamic typing : We do not have to manually define the data type of the value stored in a variable . Instead , data types are determined automatically .
    -- Value has type , NOT variables!!!!

*/

let javascriptIsFun = true;
console.log(javascriptIsFun); 
console.log(typeof true); // Output: boolean
console.log(typeof "JavaScript"); // Output: string
console.log(typeof 24); // Output: number 

let year;
console.log(year); // Output: undefined
console.log(typeof year); // Output: undefined

// empty variables hold undefines type

year = 1991;
console.log(year);
console.log(typeof year); // Output : number

console.log(typeof null);