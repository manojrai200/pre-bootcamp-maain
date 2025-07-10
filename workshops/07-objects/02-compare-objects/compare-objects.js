// YOUR CODE BELOW
function compareObjects(o1, o2) {
  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length){
    return false;}

 for(let keys in keys1){
    if(o1[keys] !== o2[keys]){
        return false;
    }
 }

  return true;
}