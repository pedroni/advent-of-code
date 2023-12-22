/**
 * @param {String} input
 */
export default function calculateCalibration(input) {
  const parsedString = input.split('\n').map((row) => row.trim());

  const numbers = parsedString.map((row) => {
    const allNumbers = row.match(/\d/g);

    // i want first and last only
    const firstAndLast = `${allNumbers[0]}${allNumbers[allNumbers.length - 1]}`;

    return Number(firstAndLast);
  });

  return numbers.reduce((sum, digits) => {
    return sum + digits;
  }, 0);
}
