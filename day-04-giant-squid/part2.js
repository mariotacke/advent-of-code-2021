class BingoBoard {
  constructor (board) {
    this._board = board
      .split('\n')
      .map((row) => row.trim().split(/\s+/).map((number) => +number));
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
    const columns = Array.from({ length: 5 }).map(() => []);

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

  let boards = puzzleInput.slice(1).map((board) => new BingoBoard(board));

  for (let i = 0; i < drawnNumbers.length; i++) {
    const numberDrawn = drawnNumbers[i];

    boards.forEach((board) => board.mark(numberDrawn));

    if (boards.length === 1 && boards[0].hasBingo) {
      return boards[0].unmarkedNumbersSum * numberDrawn;
    }

    boards = boards.filter((board) => !board.hasBingo);
  }
};
