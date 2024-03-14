/* In js , almost everything is an object 

-- Booleans can be object (if defined with new keyword)
-- Numbers can be object (if defined with new keyword)
-- Strings can be object (if defined with new keyword)
-- Dates are always objects
-- Maths are always objects
-- Regular expression are always objects
-- Arrays are always objects
-- funtion are always objects

All js values , except primitives, are objects.

A primitive value is a value that has no properties or methods.
3.14 is a primitive value



const jonasArray = [
    'Jonas',
    1992,
    'teacher'
];

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Tideman',
    DOB : 1992,
    job : 'teacher'
};
console.log(jonasObject);

// dot notation 

console.log(jonasObject.lastName);

// bracket notation
console.log(jonasObject['lastName']);

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

*/
 /* dot notation 

 The dot notation approach involves using a dot or period and a key to access a property.

 syntax -- object.key
 You have the dot then the key of the property you want to access

const obj = {
    name : 'Amardeep',
    age : 21,
    language : 'Javascript'
}
const language = obj.language;
console.log(obj.language);
console.log(language);

// we have created language variable because later on the code we can simply call language instead of writing obj.language


we can also use dot notation to modify an existing property
 

const obj = {
    name : 'Amardeep',
    age : 21,
    language : 'javascript'
}

obj.age = 100; // here we modified age property
console.log(obj);
// {
//   name: "Amardeep",
//   age: 100,
//   language: "javascript"
// }


// also we can add a new property using this approach 

const obj = {
    name : 'amardeep',
    age : 21,
    language : 'javascript'
}
obj.location = 'Mercury'; // here we added location property
console.log(obj);
 
output  {
      name: "deeecode",
      age: 80,
      language: "javascript",
      location: "Mercury"
    }
    */

    // objects methods

// const rishu = {
//     firstName : 'Rishu',
//     lastName : 'Verma',
//     birthYear : 2003,
//     job : 'student',
//     friends : ['Michael','Peter','Steven'],
//     hasDriverLicence : false,

//     calcAge: function(birthYear){
//         return 2024-birthYear;
//     }
// };
 
// this keyword

const user = {
    username : "Rishu",
    age : 21,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username = 'Sam';
user.welcomeMessage()
