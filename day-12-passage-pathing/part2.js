class Cave {
  constructor (name) {
    this.name = name;
    this.isSmall = /[a-z]+/.test(name);
    this.isBig = !this.isSmall;
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

  const canVisitAgain = (path, nextCave) => {
    const smallCavesVisited = new Set();

    let smallCaveVisitedTwice = null;

    for (let i = 0; i < path.length; i++) {
      const cave = path[i];

      if (cave.isSmall) {
        if (smallCavesVisited.has(cave)) {
          smallCaveVisitedTwice = cave;
        } else {
          smallCavesVisited.add(cave);
        }
      }
    }

    return !nextCave.isStart &&
          (smallCaveVisitedTwice === null || !smallCavesVisited.has(nextCave));
  };

  const explore = (path = []) => {
    const currentCave = path.slice(-1)[0];

    if (currentCave.isEnd) {
      return paths.push(path.map((cave) => cave.name).join(','));
    }

    const cavesToExplore = [...currentCave.connections]
      .filter((nextCave) => canVisitAgain(path, nextCave));

    cavesToExplore.forEach((nextCave) => explore([...path, nextCave]));
  };

  explore([caveMap.get('start')]);

  return paths.length;
};
