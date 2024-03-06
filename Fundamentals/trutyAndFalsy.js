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