class Cave {
  constructor (name) {
    this.name = name;
    this.isSmall = /[a-z]+/.test(name);
    this.isStart = name === 'start';
    this.isEnd = name === 'end';
    this.connections = new Set();
  }

  addConnection (cave) {
    this.connections.add(cave);
  }
}

module.exports = (input) => {
  const caveMap = new Map();

  input.split('\n').forEach((connection) => {
    const [from, to] = connection.trim().split('-');

    const fromCave = caveMap.get(from) || new Cave(from);
    const toCave = caveMap.get(to) || new Cave(to);

    fromCave.addConnection(toCave);
    toCave.addConnection(fromCave);

    if (!caveMap.has(from)) {
      caveMap.set(from, fromCave);
    }

    if (!caveMap.has(to)) {
      caveMap.set(to, toCave);
    }
  });

  const paths = [];

  const explore = (path = []) => {
    const currentCave = path.slice(-1)[0];

    if (currentCave.isEnd) {
      paths.push(path.map((cave) => cave.name).join(','));

      return;
    }

    const cavesToExplore = [...currentCave.connections].filter((nextCave) => {
      const alreadyVisitedSmallCave = nextCave.isSmall && path.includes(nextCave);

      return !nextCave.isStart && !alreadyVisitedSmallCave;
    });

    cavesToExplore.forEach((nextCave) => explore([...path, nextCave]));
  };

  explore([caveMap.get('start')]);

  return paths.length;
};
