import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GameDetails from '../components/GameDetails';


const Details = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    // hit RAWG endpoint to get details of a game
    fetch(`https://api.rawg.io/api/games/${gameId}?key=9bfc5b43bdf34c17a7d200427c7efa13`)
    .then(response => response.json())
    .then(data => setGame(data));
    }, 
    // eslint-disable-next-line
  []);
  

  return(
    <>
      <Navigation />
      <GameDetails game={game}  />
      <Footer />
    </>
  );
}

export default Details;
