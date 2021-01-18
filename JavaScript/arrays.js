// Create some arrays
const numbers = [6, 17, 12, 1, 30, 31, 10 ];
const numbers2 = new Array(11, 25, 3, 18, 35);
const fruit = ['Mango', 'Melon', 'Papaya', 'Guava'];
const mixed = ['Hello', 8, true, undefined, null, {a: 1, b: 2}];


let value;


// Get array length

value = numbers.length;

// Check if is array
value = Array.isArray(numbers);

// Get single value

// value = numbers[4];
// value = numbers[6];

// Insert into array
// numbers[5] = 100;

// // Find index of value
// value = numbers.indexOf(12);

// // Mutating arrays
// // Add on to end

// numbers.push(99);


// // Add on to front
// numbers.unshift(70);

// // Take off from end
// numbers.pop();

// // Take off front
// numbers.shift();

// Splice
// numbers.splice(0, 3);

// //Reverse
// numbers.reverse();

//Concatinate array
// value = numbers.concat(numbers2);

// Sorting arrays
value = fruit.sort();
value = numbers2.sort();

// use the compare function
value = numbers.sort(function(x, y) {
return x - y;
});

// reverse sort
value = numbers.sort(function(x, y) {
    return y - x;
    });

// Find
function over30 (num) {
    return num > 30;
}
value = numbers.find(over30);

console.log(value);