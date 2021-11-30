import React from 'react';
import { Link } from 'react-router-dom';

const GameDetails = (props) => {

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center text-dark">
                <div className="small mb-1">Release Date: {props.game.released}</div>
                    <h1 className="display-5 fw-bolder">{props.game.name}</h1>
                    <div className="fs-5 mb-5">
                        <span>Rating: {props.game.rating}</span>
                    </div>
                <div className="col-md-6">
                  <img className="img-thumbnail mb-5 mb-md-0" src={props.game.background_image} alt={props.game.name} />
                  <img className="img-thumbnail mb-5 mb-md-0" src={props.game.background_image_additional} alt={props.game.name} />
                </div>
                <div className="col-md-6">
                    <p className="lead text-dark">{props.game.description_raw}</p>
                    <div className="d-flex">
                        <Link className="btn bi bi-arrow-left-short flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default GameDetails;
