import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* <Link to="/" className="navbar-brand">HOME</Link> */}
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/vending" className="nav-link">Vending Machine</Link>
          </li>
          <li className="navbar-item">
          <Link to="/stock" className="nav-link">Stock</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}