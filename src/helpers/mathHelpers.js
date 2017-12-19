
export const isBetween = (val, min, max) => {
  return min <= val && val <= max; 
};

export const getMaxPercentageSize = (noOfCards) => {
  const noOfCardsInEachDirection = Math.ceil(Math.sqrt(noOfCards));
  return 100 / noOfCardsInEachDirection;
};