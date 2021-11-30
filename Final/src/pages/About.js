import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container my-5">
        <h1 className="text-danger">GameList</h1>
        <p className="text-dark fs-3">Muju Matthew Edgar Freeman (105021810012), Informatika</p>
        <p className="text-dark">Aplikasi ini adalah aplikasi untuk melihat informasi dari game-game. User dapat melihat informasi dari game yang dipilih. Aplikasi ini menggunakan API dari RAWG.</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
