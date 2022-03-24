import React from 'react';
import { Link } from 'react-router-dom';
import { Buscador } from './Buscador';

export const Header = ({favourites}) => {
  let token = sessionStorage.getItem('token');
  
  return (
      <header>
        <nav className="nav navbar-expand-sm navbar-dark bg-dark">
          <ul> 
            <li className="header-nav">
              <span className="navbar-brand fs-5 text-info">Alkemy Challenge</span>
              <Link className="navbar-brand fs-6 mx-2" to="/">Home</Link>
              <Link className="navbar-brand fs-6 mx-2" to="/react-movielist/list">List</Link>
              <Link className="navbar-brand fs-6 mx-2" to="/react-movielist/favourites">Favourites</Link>
              
            {token &&
              <span className="nav mx-1 badge bg-primary">Movies in Fav: {favourites.length}</span>
            }
            </li>
          </ul>
          <Buscador />
        </nav>
      </header>
  )
}

