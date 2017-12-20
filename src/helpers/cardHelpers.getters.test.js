import { getCard, getActiveCards, getNoOfCardsWithIcon } from './cardHelpers';

const mockCards = [
  {id: 4, icon: 'icon2'},
  {id: 2, icon: 'icon1', isActive: true},
  {id: 5, icon: 'icon2'},
  {id: 1, icon: 'icon2'},
  {id: 3, icon: 'icon1', isActive: true}
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

describe('getNoOfCardsWithIcon', () => {

  it('should get the number of cards with the specified icon', () => {
    expect(getNoOfCardsWithIcon(mockCards, 'icon1')).toEqual(2);
    expect(getNoOfCardsWithIcon(mockCards, 'icon2')).toEqual(3);
    expect(getNoOfCardsWithIcon(mockCards, 'icon3')).toEqual(0);
  });
  
});