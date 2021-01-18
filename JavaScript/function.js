// FUNCTION DECLARATION

// function greet(firstName = 'Mimo', lastName = 'Acasio') {
//     if(typeof firstName === 'undefined') {
//         firstName = 'Mimo';
//     }
//     if(typeof lastName === 'undefined') {
//         lastName = 'Acasio';
//     }

//     console.log('Hello');
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

// function greet(firstName, lastName) {
//     if(typeof firstName === 'undefined') {
//         firstName = 'Mimo';
//     }
//     if(typeof lastName === 'undefined') {
//         lastName = 'Acasio';
//     }

//     console.log('Hello');
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

function greet(firstName, lastName) {
    if(typeof firstName === 'undefined') {
        firstName;
    }
    if(typeof lastName === 'undefined') {
        lastName;
    }

    console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet('Mico', 'Acasio'));

// FUNCTION EXPRESSIONS
// const square = function(x = 3) {
// return x * x;
// } 

// console.log(square());

// NaN
const square = function(x) {
    return x * x;
    } 
    
    console.log(square(10));

// Immidiatley Invokable Function Expressions = IIFEs

(function(name){
    console.log(`Name ${name}`)
})('Myco');

// Property Methods
const todo = {
    add: function() {
        console.log('Add todo');
    },
    edit: function(id) {
    console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit();
todo.delete();
