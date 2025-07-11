// YOUR CODE BELOW


function getDogBreeder(defaultName, defaultAge) {

  function dogBreeder(name=defaultName, age=defaultAge) {
    if (typeof name === 'number') {
      age = name;
      name = defaultName;
    }

    return  {
      name: name,
      age: age
    }
  }

  return dogBreeder;

}

let dogBreeder = getDogBreeder('Rufus', 5);
console.log(dogBreeder());
