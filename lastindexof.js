const lastIndexOf = function(array, value) {
  let index = false;
  let result = 0;

  for(let i = 0; i < array.length; i++){
    if (array[i] === value){
      result = i;
      index = true;
    }
  };
  if(index){
    return result;
  }
  else{
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);