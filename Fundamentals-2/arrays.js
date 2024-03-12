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