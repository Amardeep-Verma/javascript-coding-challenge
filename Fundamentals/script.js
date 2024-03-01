// let js = 'amazing';
// if(js === 'amazing') console.log('Javascript is FUN!');
// console.log(40+8 +23 -10);
// console.log('Rishu');

// variables

// let firstName = "Amardeep";
// let lastName = "Verma"; 
// console.log(firstName+" "+lastName);

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
*/
/* let , const and var
1.let - we should always use let to declare variables.It is block scoped.
2.const - once declared cant be changed.
3.var - older way to declare var. It is global scoped . never use 




let age = 30;
age =31; //reassigned 

const birthYear= 2003;
birthYear = 2004; -- error 

lastName = 'Kohli';
console.log(lastName);  // we should avoid this without declaring variables

const now = 2037;
const ageVirat = 2037 - 1991;
const ageAnushka =  2037 - 1994;
console.log(ageVirat , ageAnushka);

const now = 2037;
const ageVirat = now - 1991;
const ageAnushka =  now - 1994;
console.log(ageVirat , ageAnushka);

*/

//Operators and Operators Precedence

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

solution ;;;;
const  massMark = 78 ;
const  heightMark = 1.69;
const   massJohn = 92;
const heightJohn = 1.95;

BMIMark = massMark/(heightMark*heightMark);
BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIJohn);
console.log(BMIMark);



const firstName = 'Rishu';
const job = 'Student';
const birthYear = 2003;

const Rishu = "I'm " + firstName + ', a' +  ' '+job+' from '+birthYear 

console.log(Rishu);
*/
// string interpolation 

// if else

let age = 19;
if(age>18){
  console.log('Adult');
}else{
  console.log('Not adult');
}