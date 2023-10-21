import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import api from '../../api/axiosConfig';
import './Review.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Review = () => {
    
    let params = useParams();
    const imdbId = params.imdbId;
    const reviewText = useRef();

    const [movie,setMovie]= useState();
    const [reviews,setReviews]= useState([]);

    const getMovie = async (imdbId)=>{
        try{
          const resp = await api.get(`/api/v1/movies/imdbId/${imdbId}`);
          setMovie(resp.data);
          setReviews(resp.data.reviewsId)
        }catch(error){
          console.log(error);
        }
      }
    
    
    
    useEffect(()=>{
        getMovie(imdbId);

    },[])

    const addReview = async (e)=>{
        e.preventDefault();
        const rev = reviewText.current;
       
        try{
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:imdbId});
            const updatedReviews = [...reviews,{body:rev.value}];
            setReviews(updatedReviews);
            rev.value = "";
        }catch(err){
            console.error(err);
        }
    }

  return (
    <div className='review-page' style={{ backgroundImage: `url(${movie?.backdrops[5]})` }} >
        <div className='poster-container'>
            <div className='poster-wrapper'>
              <img className='poster'  src={movie?.poster} alt="" /> 

            </div>
        </div>
        <div className='review-form-container'>
            <div className='pad'></div>
            
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{movie?.title}</Form.Label>
                <Form.Control  ref={reviewText} as="textarea" rows={3} defaultValue=""  />
            </Form.Group>
            <Button variant="outline-info" onClick={addReview} >Submit</Button>
             </Form> 
           
            <div className='reviews-container'>
                  <h2 style={{color:'gold'}}>Reviews</h2>  
                {
                    reviews?.map((review)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{review.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Review