//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Detail } from './components/Detail';
import { Results } from './components/Results';

//Styles
import './css/App.css';
import './css/bootstrap.min.css';
import { Favourites } from './components/Favourites';
import { useEffect, useState } from 'react';

function App() {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favsMoviesLocal = localStorage.getItem('favs'); 
    console.log(favsMoviesLocal);
    
    if(favsMoviesLocal != null){
      const favsArray = JSON.parse(favsMoviesLocal);
      setFavourites(favsArray);
    }
  }, [])

  //Function to add or remove favourites
  const addOrRemoveFromFavs = (e) => { 
    
    //Read localStorage to get items from fav (if exists)
    const favMovies = localStorage.getItem('favs'); 
    let tempMovieInFavs;
  
    //Check the info from favs in localStorage
    if (favMovies === null){
      tempMovieInFavs = [];
    } else {
      tempMovieInFavs = JSON.parse(favMovies);
    }
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;

    //Get info from HTML 
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    };

    //Save favourites data through data properties from HTML5
    let movieIsInArray = tempMovieInFavs.find(e => e.id === movieData.id);

    //If the movie isn't in favourites, it will be added
    //Else the movie will be removed from favourites
    if (!movieIsInArray) {
      tempMovieInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMovieInFavs));
      setFavourites(tempMovieInFavs);
      console.log('Movie added to favourites');
    } else {
      let movieDeleted = tempMovieInFavs.filter(e => {
        return e.id !== movieData.id;
      });
      localStorage.setItem('favs', JSON.stringify(movieDeleted));
      setFavourites(movieDeleted);
      console.log('Your movie was deleted from favourites');
    }

  };

  return (
    <>
      <Header favourites={favourites}/>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/react-movielist" element={<Login />} />
          {/* <Route path="/list" element={<List />} /> */}
          
          {/* In V6 router doesn't exist router anymore */}
          <Route path="/react-movielist/list" element={ <List addOrRemoveFromFavs={addOrRemoveFromFavs} /> } />
          <Route path="/react-movielist/detail" element={<Detail />} />
          <Route path="/react-movielist/results" element={ <Results addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path="/react-movielist/favourites" element={<Favourites favourites={favourites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
