// eslint-disable-next-line no-unused-vars
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map(word => word.slice(0, 1)
      .toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(titleCase('alchemy ROCKS goLD'));

