import { defaultNoOfCards, defaultNoOfMatches, initialCardState } from '../data/constants';
import { types } from '../data/types';


const getNoOfCards = (noOfCards, noOfMatches) => {
  noOfCards = Math.abs(noOfCards);
  noOfCards -= (noOfCards % noOfMatches);
  return noOfCards;
};

const createCard = (i, noOftypes) => {
  return Object.assign({}, initialCardState, { 
    id: i, 
    name: 'Card '+i, 
    type: types[i % noOftypes] 
  });
};

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const createCards = (noOfCards, noOftypes) => {
  const cards = [];
  for (let i = 1; i <= noOfCards; i++) {
    cards.push(createCard(i, noOftypes));
  }
  return shuffle(cards);
};

const initCards = (noOfCards = defaultNoOfCards, noOfMatches = defaultNoOfMatches) => {

  noOfCards = getNoOfCards(noOfCards, defaultNoOfMatches);

  let noOftypes = noOfCards / noOfMatches;
  if (noOftypes > types.length) {
    noOftypes = types.length;
    noOfCards = noOftypes * noOfMatches;
  }

  return createCards(noOfCards, noOftypes);
};

const toggleCardActive = (card, isActive) => ( 
  Object.assign({}, card, { isActive: isActive || false }) 
);


const toggleCardDone = (card, isDone) => {
  const isActive = isDone ? false : card.isActive;
  return Object.assign({}, card, { isDone: isDone || false, isActive: isActive });
};

const getCard = (cards, id) => ( cards.filter(card => card.id === id)[0] );
const getActiveCards = cards => ( cards.filter(card => card.isActive) );


export { initCards, getCard, getActiveCards, toggleCardActive, toggleCardDone };