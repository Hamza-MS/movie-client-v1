import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Hero = ({ movies }) => {
    return (
            <Carousel>
                {movies.map((movie) => {
                    return (
                        <div className='hero-container'>
                            <Paper key={movie.id} className="hero-carousel-paper">
                                <div className="hero-background-image" style={{ backgroundImage: `url(${movie.backdrops[1]})` }}>
                                    <div className='detail-container' >
                                        <div className='movie-poster-container' style={{backgroundImage:`url(${movie.poster})`}}/>
                                        <h4 className="hero-movie-title">{movie.title}</h4>
                                        <div className="play-button-container">
                                            <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <FontAwesomeIcon icon={faCirclePlay} className="play-button-icon" />
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    );
                })}
            </Carousel>
    );
};
