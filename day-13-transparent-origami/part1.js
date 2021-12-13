const MAXIMUM_FOLDS = 1;

class Paper {
  constructor (dots) {
    this.width = Math.max(...dots.map(([x]) => x));
    this.height = Math.max(...dots.map(([, y]) => y));

    this._grid = Array.from({ length: this.height + 1 }).map(() => {
      return Array.from({ length: this.width + 1 }).fill('.');
    });

    dots.forEach(([x, y]) => {
      this._grid[y][x] = '#';
    });
  }

  foldUp (position) {
    const upperHalf = this._grid.slice(0, position).reverse();
    const lowerHalf = this._grid.slice(position + 1);

    lowerHalf.forEach((row, y) => {
      row.forEach((column, x) => {
        upperHalf[y][x] = column === '#' ? '#' : upperHalf[y][x];
      });
    });

    this._grid = upperHalf.reverse();
  }

  foldLeft (position) {
    this._grid.forEach((row, y) => {
      const leftHalf = row.slice(0, position).reverse();
      const rightHalf = row.slice(position + 1);

      rightHalf.forEach((column, x) => {
        leftHalf[x] = column === '#' ? '#' : leftHalf[x];
      });

      this._grid[y] = leftHalf.reverse();
    });
  }

  get dots () {
    return this._grid.flat().reduce((total, element) => {
      return total + (element === '#' ? 1 : 0);
    }, 0);
  }
}

module.exports = (input) => {
  const sections = input.split('\n\n');

  const dots = sections[0].split('\n').map((line) =>
    line.trim().split(',').map((component) => +component));

  const foldInstructions = sections[1].split('\n').map((line) => {
    const [, axis, position] = /fold along ([xy])=(\d+)/.exec(line);

    return { axis, position: +position };
  });

  const paper = new Paper(dots);

  for (let i = 0; i < MAXIMUM_FOLDS; i++) {
    const { axis, position } = foldInstructions[i];

    if (axis === 'x') {
      paper.foldLeft(position);
    } else {
      paper.foldUp(position);
    }
  }

  return paper.dots;
};
