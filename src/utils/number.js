export const rand = (min, max) => {
  return min + Math.random() * (max - min);
};

export const isBetweenEqual = (value, min, max) => {
  return value >= min && value <= max;
};
