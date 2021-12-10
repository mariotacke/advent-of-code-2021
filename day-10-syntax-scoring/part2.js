const characterScoreMap = new Map([
  [')', 1],
  [']', 2],
  ['}', 3],
  ['>', 4],
]);

const closingCharacterMap = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['<', '>'],
]);

module.exports = (input) => {
  const scores = input
    .split('\n')
    .reduce((scores, line) => {
      const characters = line.trim().split('');
      const history = [];

      for (let i = 0; i < characters.length; i++) {
        const currentCharacter = characters[i];

        if (closingCharacterMap.has(currentCharacter)) {
          history.push(currentCharacter);
        } else {
          const lastOpeningCharacter = history.slice(-1)[0];
          const lastClosingCharacter = closingCharacterMap.get(lastOpeningCharacter);

          if (lastClosingCharacter === currentCharacter) {
            history.pop();
          } else {
            return scores;
          }
        }
      }

      history.reverse();

      scores.push(history.reduce((total, character) => {
        return total * 5 + characterScoreMap.get(closingCharacterMap.get(character));
      }, 0));

      return scores;
    }, [])
    .sort((a, b) => a - b);

  return scores.slice(Math.floor(scores.length / 2))[0];
};
