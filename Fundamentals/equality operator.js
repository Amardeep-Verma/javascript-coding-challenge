/*
const age = 18;  // if the if block has only one statement we dont need curly braces
if(age === 18 ) console.log('You just became an adult ')

=== --> known as strict equality operator it do not perform type coersion.  Meanwhile == is known as loose equality is does type coersion.

console.log(18===18); //true
console.log(18=='18'); // true
console.log(18==='18'); // false


const number = 29;
if(number === 29)console.log('You became an adult(strict)');

if(number == 29)console.log('You became an adult(loose)');


const num = '30';
if(num === 30)console.log('It is 30');
if (num == 30)console.log('It is 30 (loose)');
now only if with == will be printed



Comparing Different Types

2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false

When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

logical operator

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense);//false

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log("Sarah is able to drive!")
}else{
    console.log('Someone else should drive...');
}


const shouldDrive1 = hasDriversLicense || hasGoodVision;
if(shouldDrive1){
    console.log('Sarah should drive ');
}else{
    console.log('Someone else should drive...');
}

switch statement

const day = 'monday';

switch(day){
    case 'monday':
        console.log("Today is monday ");
        console.log();
}
*/
//ternery or conditional operator --> it allows us to write if else statement but in only one line .

const age = 23;
// age >=18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water');



const drink = age>=18  ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age>=18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`); //template literal


const bill = 275;
const tip= bill <=300 && bill >=50 ? bill *0.15 : bill * 0.2;
console.log(`The bil was ${bill}, the tip was ${tip},and the total value ${bill+tip}`);