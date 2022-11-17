function at(array, index) {
  if (index < 0) {
    return array[array.length + index];
  } else {
    return array[index];
  } 
}

console.log(at(['a', 'b', 'c', 'd', 'e'], 3));
console.log(at(['a', 'b', 'c', 'd', 'e'], -3));
