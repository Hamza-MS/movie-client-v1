import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

export const Hero = ({movies}) => {
  return (
    <div>
        <Carousel>
            {
                movies.map((movie)=>{
                    return(
                        <Paper key={movie.id}>
                            <img src={movie.poster} alt={movie.title} className="hero-image"/>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}
