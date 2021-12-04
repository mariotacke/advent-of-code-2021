class BingoBoard {
  constructor (board) {
    this._board = board;
  }

  mark (number) {
    for (let y = 0; y < this._board.length; y++) {
      for (let x = 0; x < this._board.length; x++) {
        if (this._board[y][x] === number) {
          this._board[y][x] = 'X';
        }
      }
    }
  }

  get hasBingo () {
    const columns = Array
      .from({ length: 5 })
      .map(() => Array.from({ length: 5}).map(() => []));

    for (let y = 0; y < this._board.length; y++) {
      if (this._board[y].every((number) => number === 'X')) {
        return true;
      }

      for (let x = 0; x < this._board.length; x++) {
        columns[x].push(this._board[y][x]);
      }
    }

    return columns.some((column) => column.every((number) => number === 'X'));
  }

  get unmarkedNumbersSum () {
    return this._board
      .flat()
      .reduce((sum, number) => number !== 'X' ? sum + number : sum, 0);
  }
}

module.exports = (input) => {
  const puzzleInput = input.split('\n\n').map((line) => line.trim());

  const drawnNumbers = puzzleInput[0].split(',').map((number) => +number);
  const boards = puzzleInput.slice(1).map((board) => {
    const grid = board
      .split('\n')
      .map((row) => row.trim().split(/\s+/).map((number) => +number));

    return new BingoBoard(grid);
  });

  for (let i = 0; i < drawnNumbers.length; i++) {
    const numberDrawn = drawnNumbers[i];

    boards.forEach((board) => board.mark(numberDrawn));

    const boardWithBingo = boards.find((board) => board.hasBingo);

    if (boardWithBingo) {
      return boardWithBingo.unmarkedNumbersSum * numberDrawn;
    }
  }
};
