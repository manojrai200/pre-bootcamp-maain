// YOUR CODE BELOW

  function addTen(num) {
    return num + 10;
  }

  function subtractFive(num) {
    return num - 5;
  }

  function multiplyFive(num) {
    return num * 5;
  }

function chainReaction(num, arrOfFunc){

    debugger;
    let newNum;
    for(let i = 0; i < arrOfFunc.length; i++){
        if(i === 0){
        newNum = arrOfFunc[i](num);
        }else {
            newNum = arrOfFunc[i](newNum);
        }
    }

    return newNum;
}

console.log(chainReaction(10, [addTen, multiplyFive, subtractFive]));