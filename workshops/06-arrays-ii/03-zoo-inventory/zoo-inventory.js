// ### Zoo Inventory

// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */
// ```


// // YOUR CODE BELOW

function zooInventory(array){

    debugger;
    let result = ['', ''];

    for(let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
            for(let j = 0; j < array[i].length; j++){
                if (!Array.isArray(array[i][j])){
                    result[i] += array[i][j] + ' the ';
                }else {
                    result[i] += array[i][j].join(' is ');
                }
            }
        }
    }
    result[0] += '.';
    result[1] += '.';

    return result;


}

console.log(zooInventory([
      ['Hobbes', ['tiger', 32]],
      ['Simba', ['lion king', 23]]
    ]))