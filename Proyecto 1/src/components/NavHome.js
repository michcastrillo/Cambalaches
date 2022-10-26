import { Link, useParams } from 'react-router-dom';
import { Component } from 'react';

const NavHome = ({nameUser}) => {
  const {userid}= useParams();

  const handleClick = (e) => sessionStorage.removeItem("authUser");

  return (
    <div>
      <header>
        {/* Nombre del usuario */}
        <p>{nameUser}</p>
        <div className='conte-left'>
          <ul>
            <li>
            <Link to={'/login'} onClick={handleClick} className='Link'>Logout</Link>
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