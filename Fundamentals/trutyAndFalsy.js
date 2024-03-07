/* Truty and Falsy values]

There are 5 falsy values in js 
1. 0
2. '' --> empty String
3. undefined
4. null
5. NaN


Truty values -- Everthing that can be converted is Truty values.

*/

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log('John'); //true
console.log(Boolean({})); //true
// The {} represents an empty object, and when converted to a boolean, it is truthy. Therefore, the console.log statement will output true.

const money = 0;
if(money){
    console.log("Don't spend it all");
}else{
    console.log('You should get a job');
}
// in the above code the the interpreter will convert money to boolean since if else statement takes boolean therefore the output wil be you should get a job since the value of money is 0 and 0 is falsy. but if we change value it will give the else line statement . 


// same logic goes below  ...

let height;
if(height){
    console.log('Yay! Height is defined');
}else{
    console.log('Height is UNDEFINED');
}