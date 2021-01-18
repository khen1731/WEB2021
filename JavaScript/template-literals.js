const name = 'Myco';
const age = 25;
const job = 'Web Developer';
const city = 'Nueva Ecija';
let html;

// Without template string (es5)

// html = '<ul><li>Name: ' +
//         name +
//         '</li><li>Age: ' +
//         age +
//         '</li><li>Job: ' +
//         job +
//         '</li><li>City: ' +
//         city +
//         '</li></ul>';

// With template strings (es6)
// Function declaration
function hello() {
    return 'Hello World';
}

// Ternary operation -- ?If :Else
html = `
        <ul>
            <li>Name: ${name} </li>
            <li>Name: ${age} </li>
            <li>Name: ${job} </li>
            <li>Name: ${city} </li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 20 ? 'Over 20' : 'Under 20'}</li> 

        </ul>

        `;

        document.body.innerHTML = html;

        if(age > 30) {
        'Over 30'
        }else {
        'Under 30'
        }