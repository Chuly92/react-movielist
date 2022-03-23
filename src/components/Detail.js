import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export const Detail = () => {

  //Localstorage -> it doesn't delete until we do it
  //Sessionstorage -> it deletes when we close the browser
  // let token = localStorage.getItem('token');
  let token = sessionStorage.getItem('token');
  const apiKey = 'bbd796043bd5e13e72d52b56d02cfbad';
  let urlImage = 'https://image.tmdb.org/t/p/w500/';

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`

    axios.get(endPoint)
      .then(res => {
        const movieData = res.data;
        setMovie(movieData);
      })
      .catch(err => {
        swAlert(
        <h2>An error has occurred<br/>Please try again</h2>
    )
      })


  }, [movieID]);

  return (
    <>

      {!token && <Navigate to="/" />}
      {!movie && <p>Loading...</p>}
      {movie &&
        <>
          <h3>Title: {movie.title} </h3>
          <div className="row">
            <div className="col-4">
              <img src={`${urlImage}${movie.poster_path}`} className="img-fluid" alt="movie poster" />
            </div>
            <div className="col-8">
              <h5>Release Date: {movie.release_date}</h5>
              <h5>Review:</h5>
              <p>{movie.overview}</p>
              <h5>Rating: {movie.vote_average}</h5>
              <h5>Gender: </h5>
              <ul>
                {movie.genres.map(oneGenre => {
                  return (
                      <li key={oneGenre.id}>{oneGenre.name}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </>
      }

    </>
  )
}
