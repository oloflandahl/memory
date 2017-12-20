import { defaultNoOfCards, defaultNoOfMatches, initialCardState } from '../data/constants';
import { icons } from '../data/icons';


const getNoOfCards = (noOfCards, noOfMatches) => {
  noOfCards = Math.abs(noOfCards);
  noOfCards -= (noOfCards % noOfMatches);
  return noOfCards;
};

const createCard = (i, noOfIcons) => {
  return Object.assign({}, initialCardState, { 
    id: i, 
    name: 'Card '+i, // Remove
    icon: icons[i % noOfIcons] 
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

const createCards = (noOfCards, noOfIcons) => {
  const cards = [];
  for (let i = 1; i <= noOfCards; i++) {
    cards.push(createCard(i, noOfIcons));
  }
  return shuffle(cards);
};

const initCards = (noOfCards = defaultNoOfCards, noOfMatches = defaultNoOfMatches) => {

  noOfCards = getNoOfCards(noOfCards, noOfMatches);

  let noOfIcons = noOfCards / noOfMatches;
  if (noOfIcons > icons.length) {
    noOfIcons = icons.length;
    noOfCards = noOfIcons * noOfMatches;
  }

  return createCards(noOfCards, noOfIcons);
};

const toggleCardActive = (card, isActive) => { 
  isActive = (card.isDone ? false : isActive) || false;
  return Object.assign({}, card, { isActive: isActive }); 
};

const toggleCardDone = (card, isDone) => {
  const isActive = isDone ? false : card.isActive;
  return Object.assign({}, card, { isDone: isDone || false, isActive: isActive });
};

const getCard = (cards, id) => ( cards.filter(card => card.id === id)[0] );
const getActiveCards = cards => ( cards.filter(card => card.isActive) );
const getNoOfCardsWithType = (cards, icon) => ( cards.filter(card => card.icon === icon).length );


export { initCards, toggleCardActive, toggleCardDone, getCard, getActiveCards, getNoOfCardsWithType };