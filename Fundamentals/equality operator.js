const age = 18;  // if the if block has only one statement we dont need curly braces
if(age === 18 ) console.log('You just became an adult ')

// === --> known as strict equality operator it do not perform type coersion.  Meanwhile == is known as loose equality is does type coersion.

console.log(18===18); //true
console.log(18=='18'); // true
console.log(18==='18'); // false


const number = 29;
if(number === 29)console.log('You became an adult(strict)');

if(number == 29)console.log('You became an adult(loose)');


const num = '30';
if(num === 30)console.log('It is 30');
if (num == 30)console.log('It is 30 (loose)');
// now only if with == will be printed


const favorite = prompt("What's your favorite numeber");
console.log(favorite);
console.log(typeof favorite); //string


if(favorite == 23){ // '23' == 23
    console.log("Cool! 23 is an amazing number!");
} 

if(favorite === 23){ // '23' === 23
    console.log("Cool! 23 is an amazing number!");
} 



const favorite1 = Number(prompt("What's your favorite numeber"));
if(favorite1 ===23){
    console.log("Cool! 23 is an amazing number!");
}

// Comparing Different Types

// 2 < 12	true	
// 2 < "12"	true	
// 2 < "John"	false	
// 2 > "John"	false	
// 2 == "John"	false	
// "2" < "12"	false	
// "2" > "12"	true	
// "2" == "12"	false

//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

// logical operator
