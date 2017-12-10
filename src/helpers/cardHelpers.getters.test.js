import { getCard, getActiveCards, getNoOfCardsWithType } from './cardHelpers';

const mockCards = [
  {id: 4, type: 'type2'},
  {id: 2, type: 'type1', isActive: true},
  {id: 5, type: 'type2'},
  {id: 1, type: 'type2'},
  {id: 3, type: 'type1', isActive: true}
];

describe('getCard', () => {

  it('should get the card with the specified id', () => {
    expect(getCard(mockCards, 1)).toEqual(mockCards[3]);
    expect(getCard(mockCards, 2)).toEqual(mockCards[1]);
    expect(getCard(mockCards, 3)).toEqual(mockCards[4]);
    expect(getCard(mockCards, 4)).toEqual(mockCards[0]);
    expect(getCard(mockCards, 5)).toEqual(mockCards[2]);
  });

  it('should get undefined if card with the specified id does not exist', () => {
    expect(getCard(mockCards, 6)).toBeUndefined();
  });
  
});

describe('getActiveCards', () => {

  it('should get the active cards', () => {
    const activeCards = getActiveCards(mockCards);
    expect(activeCards.length).toEqual(2);
    expect(activeCards[0]).toEqual(mockCards[1]);
    expect(activeCards[1]).toEqual(mockCards[4]);
  });
  
});

describe('getNoOfCardsWithType', () => {

  it('should get the number of cards with the specified type', () => {
    expect(getNoOfCardsWithType(mockCards, 'type1')).toEqual(2);
    expect(getNoOfCardsWithType(mockCards, 'type2')).toEqual(3);
    expect(getNoOfCardsWithType(mockCards, 'type3')).toEqual(0);
  });
  
});