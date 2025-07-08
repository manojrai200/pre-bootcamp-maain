// YOUR CODE BELOW
function defaultGreet(firstName, lastName = 'Doe'){
    return ('Hi ' + firstName + ' ' + lastName + '!'
    );
}

console.log(defaultGreet("Manoj"));