// ### Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```



// YOUR CODE BELOW

function onlyOne(a, b, c) {
  let truthyCount = Boolean(a) + Boolean(b) + Boolean(c);
  if (truthyCount < 2 && truthyCount > 0){
    return true;
  }else{
    return false; 
  }
}

