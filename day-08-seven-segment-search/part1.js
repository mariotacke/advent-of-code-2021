module.exports = (input) => {
  return input.split('\n').reduce((easyDigits, line) => {
    line.split('|')[1].trim().split(' ').forEach((digit) => {
      if ([2, 3, 4, 7].some((d) => digit.length === d)) {
        easyDigits.push(digit);
      }
    });

    return easyDigits;
  }, []).length;
};
