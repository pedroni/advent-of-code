const wordToNumber = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getAllIndexes = (array, value) => {
  const indexes = [];
  let i = -1;

  while ((i = array.indexOf(value, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
};

/**
 * @param {String} input
 */
export default function calculateCalibration(input) {
  const parsedString = input
    .split('\n')
    .map((row) => row.trim())
    .filter((row) => row.length);

  const numbers = parsedString.map((row) => {
    let allNumbers = [];

    for (const word in wordToNumber) {
      const indexOfWord = getAllIndexes(row, word);
      const indexOfNumber = getAllIndexes(row, wordToNumber[word]);

      [...indexOfWord, ...indexOfNumber].flat().forEach((index) => {
        allNumbers.push({
          index: index,
          number: wordToNumber[word]
        })
      })
    }

    // sort indexes so we can know which one is the first and which one is the last
    allNumbers = allNumbers.sort((a, b) => a.index - b.index);

    const firstAndLast = `${allNumbers[0].number}${allNumbers[allNumbers.length - 1].number}`;
    
    return Number(firstAndLast);
  });

  return numbers.reduce((sum, digits) => {
    return sum + digits;
  }, 0);
}
