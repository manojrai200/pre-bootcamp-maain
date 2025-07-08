// YOUR CODE BELOW
function myMnemonic(string1, string2, string3, string4){
    if(string4 !== undefined){
        return string1[0] + string2[0] + string3[0] + string4[0];
    }else if(string3 !== undefined){
        return string1[0] + string2[0] + string3[0];
    }else if(string2 !== undefined){
        return string1[0] + string2[0];
    }else{
        return String(string1[0]);
    }
    

}

console.log(myMnemonic(''));