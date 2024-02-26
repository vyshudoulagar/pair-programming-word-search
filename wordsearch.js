const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join('')); //converting horizontal array to strings
  for (const l of horizontalJoin) { //iterating through it to check for word
    if (l.includes(word)) return true;
  }

  const transposedLetters = transpose(letters);  //transposing letters to get vertical words
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  for (let l = 0; l < horizontalJoin.length; l++) {
    let rl = horizontalJoin[l].split('').reverse().join(''); //revering the strings before checking
    if (rl.includes(word)) return true;
  }

  for (let l = 0; l < verticalJoin.length; l++) {
    let rl = verticalJoin[l].split('').reverse().join('');
    if (rl.includes(word)) return true;
  }

  return false;
};

const transpose = function(matrix) { //using it for vertical letters
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
};

module.exports = wordSearch;