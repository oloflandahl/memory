export const getTimeText = sec => {
  
  let min = toWhole(sec);
  sec = toRest(sec);
  
  let h = toWhole(min);
  min = toRest(min);
  
  return [h, min, sec]
    .map(x => withPad(x.toString()))
    .join(':');
};

const toWhole = x => (x ? Math.floor(x / 60) : 0);
const toRest = x => (x % 60);
const withPad = x => ('00'.substring(0, 2 - x.length) + x);