module.exports = (input) => {
  const course = input.split('\n').map((line) => {
    const parts = /(\w+) (\d+)/.exec(line);

    return { direction: parts[1], delta: +parts[2] };
  });

  let depth = 0;
  let horizontalPosition = 0;

  for (let i = 0; i < course.length; i++) {
    if (course[i].direction === 'up') depth -= course[i].delta;
    if (course[i].direction === 'down') depth += course[i].delta;
    if (course[i].direction === 'forward') horizontalPosition += course[i].delta;
  }

  return horizontalPosition * depth;
};
