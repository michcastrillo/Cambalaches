import { Link, useParams } from 'react-router-dom';
import { Component } from 'react';

const NavHome = ({nameUser}) => {
  const {userid}= useParams();
  return (
    <div>
      <header>
        {/* Nombre del usuario */}
        <p>{nameUser}</p>
        <div className='conte-left'>
          <ul>
            <li>
            <Link to="/" className='Link'>Logout</Link>
            </li>
            <li>
            <Link to={`/cart/${userid}`} className='Link'>My cart</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavHome;