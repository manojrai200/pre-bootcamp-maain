// YOUR CODE BELOW

    let specialPets = [{
        name: 'Mr. Binns',
        species: 'cat'
      }, {
        name: 'Pusheen',
        species: 'cat'
      }
    ];

function whosASpecial(arrayOfPets){
    let returnString = '';
    for(let i = 0; i < arrayOfPets.length; i++){
        if(i === 0){
            returnString += arrayOfPets[i].name + ' the ' + arrayOfPets[i].species + ' is very special!';
        }else {
            returnString += ' ' + arrayOfPets[i].name + ' the ' + arrayOfPets[i].species + ' is very special!'
        }
    }
    return returnString;
}

console.log(whosASpecial(specialPets));