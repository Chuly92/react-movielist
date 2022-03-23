import {Link} from 'react-router-dom';

import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <li>
            <span className="navbar-brand mb-0 h1">Alkemy Challenge</span>
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/list">List</Link>
            <Link className="navbar-brand" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
