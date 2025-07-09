// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length){
   // debugger;
    let finalString = "";
    while(endIdx  >  startIdx){
        finalString += originalString[startIdx];
        startIdx++;
    }
    return finalString;
}
