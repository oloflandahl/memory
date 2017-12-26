
export const isBetween = (val, min, max) => {
  return min <= val && val <= max; 
};

export const getValueBetween = (val, min, max) => {
  val = Math.min(val, max);
  return Math.max(val, min);
};

export const getMaxPercentageSize = (noOfCards) => {
  const noOfCardsInEachDirection = Math.ceil(Math.sqrt(noOfCards));
  return 100 / noOfCardsInEachDirection;
};

export const getWholeSeconds = (startTime, endTime) => {
  return Math.round((endTime - startTime) / 1000);
};