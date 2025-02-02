import React from 'react';
import { Link } from "react-router-dom";

const Nav1 = () => {
    return (
        <div className='nv'>
            <ul className="nav justify-content-center njc" >
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pune</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li className="dropdown-item"><Link to="/pune">Pune</Link></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Banglore</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Delhi</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Kolhapur</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Punjab</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Mumbai</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Kolkata</a>
        <ul className="dropdown-menu">
          <b className='pl'>Popular Localities</b>
          <li><a className="dropdown-item" href="#">Action</a></li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">All Cities</a>
      </li>
    </ul>
        </div>
    );
};

export default Nav1;