const person = {
firstName: 'MYCO',
lastName: 'Cumbe',
age: 25,
email: 'myco@gmail.com',
hobbies: ['Eating', 'Playing'],
address: {
city: 'San Leonardo',
street: 'Mambangnan'
},
getBirthYear: function() {
    return 2020 - this.age;
}

};

let value;

value = person;

value = person.firstName; // String
value = person.age; // Number
value = person.hobbies[1]; // Array
value = person.address.street; // Object
value = person.getBirthYear();    // Property Method

// console.log(value);

// Array Loop
const people = [{name: 'Sue', age: 5}, {name: 'Kat', age: 25}, 
{name: 'Tin', age: 30}];

// for Loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}