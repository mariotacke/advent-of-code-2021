module.exports = (input, steps = 10) => {
  const parts = input.split('\n\n');
  const polymerTemplate = parts[0].split('');
  const pairInsertionRules = parts[1].split('\n').reduce((map, rule) => {
    const [pair, insertion] = rule.trim().split(' -> ');

    map.set(pair, insertion);

    return map;
  }, new Map());

  let polymer = polymerTemplate.reduce((p, element, i, template) => {
    if (i + 1 < template.length) {
      p.push(`${element}${template[i + 1]}`);
    }

    return p;
  }, []);

  for (let step = 0; step < steps; step++) {
    const newPolymer = [];

    for (let i = 0; i < polymer.length; i++) {
      const pair = polymer[i].split('');
      const insertion = pairInsertionRules.get(pair.join(''));

      if (insertion) {
        newPolymer.push(
          [pair[0], insertion].join(''),
          [insertion, pair[1]].join('')
        );
      }
    }

    polymer = newPolymer;
  }

  const elementCounts = polymer.reduce((map, pair, i, counts) => {
    const [a, b] = pair.split('');

    if (i % 2 === 0) {
      map.set(a, (map.get(a) || 0) + 1);
      map.set(b, (map.get(b) || 0) + 1);
    } else if (i === counts.length - 1) {
      map.set(b, (map.get(b) || 0) + 1);
    }

    return map;
  }, new Map());

  const countValues = [...elementCounts.values()].sort((a, b) => b - a);

  return countValues[0] - countValues[countValues.length - 1];
};
