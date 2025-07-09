// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0){
    let count = 0;
    for (i = startIdx; i < source.length; i++){
        if (source[i] === searchValue[0]){
            startSearch = i;
            for(j = 0; j < searchValue.length; j++){
                if (source[startSearch] === searchValue[j]){
                    startSearch++;
                    count++;
                }
            }
        
        }
        if (count === searchValue.length){
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf('here and there', 'here', 4));