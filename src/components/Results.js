import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export const Results = () => {

  let token = sessionStorage.getItem('token');
  let urlImage = 'https://image.tmdb.org/t/p/w500/';
  const apiKey = 'bbd796043bd5e13e72d52b56d02cfbad';
  
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('keyword');
  
  const [moviesResults, setMoviesResults] = useState([]);
  
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${keyword}`;
    
    axios.get(endPoint)
      .then(res => {
        const moviesArray = res.data.results;
        if(moviesArray.length === 0){
          swAlert(
            <h4>There aren't results for <em>{keyword}</em></h4>
          )
        }else{
          setMoviesResults(moviesArray);
        }
      })
      .catch(err => {
        swAlert(
            <h2>An error has occurred<br/>Please try again</h2>
        )
      })
  }, [moviesResults, keyword]);


  return (
    <>
      {!token && <Navigate to="/" />}

      <h2>Your results for: <em>{keyword}</em></h2>
      <div className="row">

        {
          moviesResults.map((e, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card my-4">
                  <img src={`${urlImage}${e.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.title.substring(0, 30)}</h5>
                    {/* <p className="card-text">{e.overview.substring(0, 100)}...</p> */}
                    <Link to={`/detail?movieID=${e.id}`} className="btn btn-primary">View Detail</Link>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </>
  )
}
