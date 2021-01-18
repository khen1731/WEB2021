let val;


// Number to string
val = String(555);
val = String(4 + 4);

// Boolean to string
val= String(true);

// Date to String
val = String(new Date());

// Array to string

val = String([1,2,3,4]);

// toString method

val = (5).toString();
val =  true.toString();

// string to Number
val = Number('5'); //String
val = Number(true); // true = 1, false = 0 Boolean
val = Number([1,2,3]); // NaN = Not a Number

val = parseInt('100.30'); // Round off Decimal places
val = parseFloat('100.30'); // Retain decimal

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);



console.log(sum);


