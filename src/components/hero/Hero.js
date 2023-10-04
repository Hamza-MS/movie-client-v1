import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export const Hero = ({movies}) => {
  return (
    <div>
        <Carousel>
            {
                movies.map((movie)=>{
                    return(
                        <Paper key={movie.id}>
                            <img src={movie.poster} alt="" className="hero-image"/>
                            <h4>{movie.title}</h4>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}
