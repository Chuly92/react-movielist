import React from 'react'
import { Link, Navigate } from 'react-router-dom';

export const Favourites = ({favourites, addOrRemoveFromFavs}) => {
  
  let token = sessionStorage.getItem('token');

  // const [favourites, setFavourites] = useState([]);

  // useEffect(() => {
  //   const favsMoviesLocal = localStorage.getItem('favs'); 
  //   console.log(favsMoviesLocal);
    
  //   if(favsMoviesLocal != null){
  //     const favsArray = JSON.parse(favsMoviesLocal);
  //     setFavourites(favsArray);
  //   }
  // }, [])

  return (
    
    <>
      {!token && <Navigate to="/" />}

      <h2>Favourites Section</h2>
      <div className="row">
        { !favourites.length && <div className="col-12 text-danger">You don't have any favourites movies yet.</div>}

        {
          favourites.map((e, index) =>{
            return(
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img src={e.imgURL} className="card-img-top" alt="..." />
                  <button 
                    className="favourite-btn"
                    onClick={addOrRemoveFromFavs}
                    data-movie-id={e.id}
                  >🖤</button>
                  <div className="card-body">
                    <h5 className="card-title">{e.title.substring(0, 30)}</h5>
                    <p className="card-text">{e.overview.substring(0, 100)}...</p>
                    <Link to={`/react-movielist/detail?movieID=${e.id}`} className="btn btn-primary">View Detail</Link>
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
