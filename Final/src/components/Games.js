import React, { useState, useEffect } from 'react';
import GameItem from './GameItem';

const Games = () => {
  const [games, setGames] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // hit RAWG endpoint
    fetch('https://api.rawg.io/api/games?key=9bfc5b43bdf34c17a7d200427c7efa13')
    .then(response => response.json())
    .then(data => setGames(data.results));

    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();

    // hit RAWG endpoint to search
    fetch(`https://api.rawg.io/api/games?search=${text}&key=9bfc5b43bdf34c17a7d200427c7efa13`)
    .then(response => response.json())
    .then(data => setGames(data.results));

    setText('');
  }

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2 className="text-dark">Search Game</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text} />
          </form>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
          { games.map(game => <GameItem key={game.id} game={game} />) }             
          </div>
      </div>
  </section>
  );
}

export default Games;