// YOUR CODE BELOW

function stringify(callBack){
    function convertedString(){
        string = callBack();
        return String(string);
    }
    return convertedString;
}

