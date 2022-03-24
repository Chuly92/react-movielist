import React from 'react';
import { Link } from 'react-router-dom';
import { Buscador } from './Buscador';

export const Header = () => {
  return (
      <header>
        <nav className="nav navbar-expand-sm navbar-dark bg-dark">
          <ul>
            <li className="header-nav">
              <span className="navbar-brand h1 text-info">Alkemy Challenge</span>
              <Link className="navbar-brand mx-2" to="/">Home</Link>
              <Link className="navbar-brand mx-2" to="/list">List</Link>
              <Link className="navbar-brand mx-2" to="/favourites">Favourites</Link>
              <Link className="navbar-brand mx-2" to="/contact">Contact</Link>
            </li>
          </ul>
          <Buscador />
        </nav>
      </header>
  )
}

