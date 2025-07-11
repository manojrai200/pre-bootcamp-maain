// YOUR CODE BELOW

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

function cloneMachine(obj){
    debugger;
    let clone = {};
    clone.name = obj.name + 'Clone';
    clone.species = obj.species;
    clone.offspring = [];

    obj.offspring.push(clone.name);
    return clone;
}

console.log(cloneMachine(dolly));