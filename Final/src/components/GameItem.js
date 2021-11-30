import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/GameItem.css';

const GameItem = (props) => {
    return(
        <section className="wrapper">
    <div className="container-fostrap">
        
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-6">
                        <div className="card">
                            <Link className="img-card" to={`/details/${props.game.id}`}>
                            <img className="card-img-top " src={props.game.background_image} alt={props.game.name} />
                          </Link>
                            <div className="card-content">
                                <h4 className="card-title">
                                    <Link to={`/details/${props.game.id}`}>{props.game.name}</Link>
                                </h4>
                                <p className="">
                                    {props.game.rating}
                                </p>
                            </div>
                            <div className="card-read-more">
                            <Link to={`/details/${props.game.id}`} className="btn btn-link btn-block">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  );
}

export default GameItem;
