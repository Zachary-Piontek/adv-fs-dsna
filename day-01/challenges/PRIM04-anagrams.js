function sortingString(str) {
  return str.split('')
    .sort()  
    .join(''); 
}

function anagrams(wordOne, wordTwo) {
  return sortingString(wordOne) === sortingString(wordTwo);
}

//`'superintended'`, `'unpredestined'` | `true` 
//`'pictorialness'`, `'documentarily'` | `false` 

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily')); 
console.log(anagrams('red', 'der')); 
console.log(anagrams('red', 'derp')); 
console.log(anagrams('red', 'dep'));
