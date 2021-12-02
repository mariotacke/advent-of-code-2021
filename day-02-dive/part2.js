module.exports = (input) => {
  const course = input.split('\n').map((line) => {
    const parts = /(\w+) (\d+)/.exec(line);

    return { direction: parts[1], delta: +parts[2] };
  });

  let depth = 0;
  let horizontalPosition = 0;
  let aim = 0;

  for (let i = 0; i < course.length; i++) {
    if (course[i].direction === 'down') aim += course[i].delta;
    if (course[i].direction === 'up') aim -= course[i].delta;

    if (course[i].direction === 'forward') {
      horizontalPosition += course[i].delta;
      depth += aim * course[i].delta;
    }
  }

  return depth * horizontalPosition;
};
