// FOR LOOP

// for(let i = 0; i < 10; i++) {
//     if (i === 2) {
//     console.log('2 is y favorite number');
//     continue;
//     }
//     if(i === 5) {
// console.log('Stop the loop');
// break;
//     }
//     console.log(`Number ${i}`);
// }

// While Loop
// let i = 0;

// while(i < 10) {
// console.log(`Number ${i}`);
// i++;
// }

// Do while
// do {
//     console.log(`Number ${i}`);
//     i++;
// }

// while(i < 10);

//Loop Through array
// const cars = ['Ford', 'Porche', 'BMW', 'Ferrari'];

// for(let i = 0; i < cars.length; i++) {
// console.log(cars[i]);
// }

// Foreach

// cars.forEach(function(car, index, array) {
// console.log(`${index}: ${car}`);
// console.log(`${array}`);
// });

// MAP
const users = [{id: 1, name: 'Mico'}, {id: 2, name: 'Myco'}, 
{id: 3, name: 'Kat'}, {id: 1, name: 'Kenneth'}];

const ids = users.map(function(user) {
    return user.name;
});
console.log(ids);

// FOR IN LOOP
const user = {
    firstName: 'Ken',
    lastName: 'Acasio',
    age: 32
};

for(let x in  user) {
console.log(`${x}: ${user[x]}`)
}