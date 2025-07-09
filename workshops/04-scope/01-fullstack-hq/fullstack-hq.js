// ### Fullstack HQ

// Refactor the function `fullstackHQ` so that it returns the correct string:

// ```javascript
// fullstackHQ();
// // => Fullstack HQ is at Planet Earth, United States, New York State, New York City
// ```

// The only things you should change are the parameter and/or variable names.




// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  debugger;
  return middleFunction('United States');

  function middleFunction(place1) {
    return innerFunction('New York State');

    function innerFunction(place2) {
      let place3 = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + place1 + ', ' + place2 + ', ' + place3;
      }
    }
  }
}

console.log(fullstackHQ());