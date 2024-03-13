/*
const friend1 = 'Michal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven' , 'Peter'];
console.log(friends);

const years = new Array(1991,1992,2003);
console.log(years);

console.log(friends[0]); // michael
console.log(friends[2]); // peter
console.log(friends[5]); //undefined

console.log(friends.length);  //3
console.log(friends[friends.length-1]); // to get last element of an array

friends[2] = 'Jonas';
console.log(friends); // peter will be replaced with jonas

// note -- we declared friends arary as const but the value still changed that is because only primitive data types cannot be changed and array in not a primitive value.
 
// friends = ['bob', 'yash'];   // error 

// array can hold different data types

const firstName = 'Rishu';
const rishu = [firstName ,'Verma', 2003 , 'student',friends];
console.log(rishu);

// exercise
const calcAge = function (birthYear){
    return 2024- birthYear;
}
const year = [1978, 1967, 2003, 1992];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[2]);

console.log(age1);
console.log(age2);
console.log(age3);

const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[2])];
console.log(ages);



//   const cars = ['Saab','Vovlo','BMW'];

// spaces and line break  are not important . A declaration can span multiple lines:
//ex --
// const cars = [
//     'Saab',
//     'Volvo',
//     'BMW',
// ];

// we can also create an array , and then provide the elements

const cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';

// using the javascript keyword NEW

const cars1 = new Array ('Saab','Volvo', 'BMW');

*/


// basic array operation (methods)

const friends = ['Michael','Steven' , 'Peter'];
friends.push('Jay'); // here push is a function 
console.log(friends); // jay will be added to the friends array

friends.unshift('John'); // unshift allows you to add one or more elements to the beginning of an array
console.log(friends); 

// remove elements
friends.pop(); // remove the last element of array
console.log(friends);
const popped = friends.pop();
console.log(popped); // peter (because peter is going to be removed)
console.log(friends);

friends.shift(); // removes first element of the array 
console.log(friends);

console.log(friends.indexOf('Steven')); // return index place of steven that is 1


console.log(friends.includes('Steven')); // true because steven is present in array
console.log(friends.includes('Arthur')); // false because arthur is not present in array
if(friends.includes('Steven')){
    console.log('you have a friend called Steven');
}else{
    console.log('No friend named Steven ');
}