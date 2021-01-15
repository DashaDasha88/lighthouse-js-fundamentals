function range(start, end, step){
  let integer = [];
  
  for (let i = start; i <= end; i = i + step){
    integer.push(i);
  }
  return integer
}

console.log(range(10, 30, 5));