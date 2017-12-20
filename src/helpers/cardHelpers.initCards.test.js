import { defaultNoOfCards, defaultNoOfMatches } from '../data/constants';
import { icons } from '../data/icons';
import { initCards } from './cardHelpers';

describe('initCards', () => {

  describe('default', () => {

    let cards;

    beforeEach(() => {
      cards = initCards();
    });

    it('should have the default number of cards', () => {
      expect(cards.length).toEqual(defaultNoOfCards);
    });

    it('should have the default number of matches', () => {
      expect(cards.filter(card => card.icon === icons[0]).length).toEqual(defaultNoOfMatches);
    });

    it('should be shuffled differently each time', () => {
      const cards2 = initCards();
      const cards3 = initCards();

      expect(cards2).not.toEqual(cards);
      expect(cards3).not.toEqual(cards);
      expect(cards3).not.toEqual(cards2);
    });

    it('should have no active or done card', () => {
      expect(cards.filter(card => card.isActive || card.isDone).length).toEqual(0);
    });

  });

  it('A valid number of cards should have that number of cards', () => {
    const cards = initCards(12);
    expect(cards.length).toEqual(12);
  });

  // TODO limits
  xit('Zero number of cards should generate the minimum number of cards', () => {
    const cards = initCards(0);
    expect(cards.length).toEqual(defaultNoOfMatches);
  });

  it('A negative number of cards should have that absolute number of cards', () => {
    const cards = initCards(-12);
    expect(cards.length).toEqual(12);
  });

  it('A too large number of cards should have the maximum possible number of cards', () => {
    const cards = initCards(50);
    expect(cards.length).toEqual(icons.length * defaultNoOfMatches);
  });

  it('A number of cards that is not a possible product of the number of matches should have the closest product down from that number', () => {
    const cards = initCards(13);
    expect(cards.length).toEqual(12);
  });

  it('A valid number of matches should generate the spcified number of cards', () => {
    const cards = initCards(25, 5);
    expect(cards.length).toEqual(25);
  });

  it('A number of matches that does not result in an integer when dividing the number of cards with it should adjust the number of cards to the closest quotient down from the decimal number', () => {
    const cards = initCards(24, 5);
    expect(cards.length).toEqual(20);
  });
  
});