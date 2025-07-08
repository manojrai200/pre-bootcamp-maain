// YOUR CODE BELOW
function lastCharacter(string1, string2){
    let end1 = string1.length - 1;
    let end2 = string2.length - 1;

    if (string1[end1] === string2[end2]){
        return true;
    }else{
        return false;
    }

}

console.log(lastCharacter('happy', 'sad'))