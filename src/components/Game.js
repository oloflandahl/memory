import React from 'react';
import MenuContainer from '../containers/MenuContainer';
import CardsContainer from '../containers/CardsContainer';
import './Game.css';


const Game = () => (
  <div className="container">
    <MenuContainer></MenuContainer>
    <CardsContainer></CardsContainer>
  </div>
);

export default Game;