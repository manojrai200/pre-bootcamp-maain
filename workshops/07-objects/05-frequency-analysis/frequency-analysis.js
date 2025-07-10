// YOUR CODE BELOW
function frequencyAnalysis(string){
    let obj = {}
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){

        if(string[i] === ' '){
            continue;
        }

        if (obj[string[i]]){
            obj[string[i]]++;
        }else {
            obj[string[i]] = 1;
        }
    }
    return obj;
}

console.log(frequencyAnalysis('i like pumpkins'));