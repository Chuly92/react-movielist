import React, {useEffect, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export const List = () => {

  let token = localStorage.getItem('token');
  let urlImage = 'https://image.tmdb.org/t/p/w500/';

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const apiKey = 'bbd796043bd5e13e72d52b56d02cfbad';
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(endPoint)
      .then(res => {
        const apiData = res.data.results;
        setMoviesList(apiData);
      })
      .catch(err => {
        swAlert(
            <h2>An error has occurred<br/>Please try again</h2>
        )
      })

  }, [setMoviesList]);

  console.log(moviesList);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
    
  //   if (token === null){
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">

        {
          moviesList.map((e, index) =>{
            return(
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img src={`${urlImage}${e.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{e.title.substring(0, 30)}</h5>
                    <p className="card-text">{e.overview.substring(0, 100)}...</p>
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
