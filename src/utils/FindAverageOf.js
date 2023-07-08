export const FindAverageOf = (array) => {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
};
