// YOUR CODE BELOW

function compareObjects(o1, o2) {
  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (o1[key] !== o2[key]) return false;
  }

  return true;
}

console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 3}));