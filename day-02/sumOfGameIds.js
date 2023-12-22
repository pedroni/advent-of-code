/**
 *
 * @param {Array.<{red: number, green: number, blue: number}>} sets
 * @returns {boolean}
 */
const isGameValid = (sets) => {
  for (const set of sets) {
    if (set.red > 12 || set.green > 13 || set.blue > 14) {
      return false;
    }
  }

  return true;
};

/**
 * @param {String} input
 */
export default function sumOfGameIds(input) {
  // make string input into an array of readable objects
  const games = input
    .split('\n')
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => {
      return {
        id: Number(row.split(': ')[0].replace('Game ', '')),
        sets: row
          .split(': ')[1]
          .split('; ')
          .map((set) => {
            return set.split(', ').reduce((acc, colorAndAmount) => {
              const [amount, color] = colorAndAmount.split(' ');
              return {
                ...acc,
                [color]: Number(amount),
              };
            }, {});
          }),
      };
    });

  const validGames = games.filter((game) => isGameValid(game.sets));

  // sum the ids
  return validGames.reduce((sum, game) => {
    return sum + game.id;
  }, 0);
}
