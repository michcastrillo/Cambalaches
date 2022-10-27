import { Link, useParams } from 'react-router-dom';
import { Component } from 'react';

const NavHome = ({nameUser}) => {
  const {userid}= useParams();

  const handleClick = (e) => sessionStorage.removeItem("authUser");

  function links(){
    if(nameUser===""){
      return <Link to={`/home/${userid}`} className='Link'>Home</Link>;
    }else{
      return <Link to={`/cart/${userid}`} className='Link'>My cart</Link>;
    }
  }
  
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
              {links()}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default NavHome;