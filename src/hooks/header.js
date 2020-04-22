import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../utils/context';

const Header = () => {
  const context = useContext(Context);

  return (
    <div class="nav nav-tabs">
      <Link to='/' class="nav-item " style={{ padding: '5px' }}>
        <a class="nav-link active btn-outline-success">Home</a>
      </Link>
      <Link to='/profile' class="nav-item" style={{ padding: '5px' }}>
        <a class="nav-link active">Profile</a>
      </Link>
      {/* <Link to='/hooksform' class="nav-item" style={{ padding: '5px' }}>
         Hooks Form
          </Link> */}
      {/* <Link to='/hookscontainer' class="nav-item" style={{ padding: '5px' }}>
        Hooks Container
          </Link>
      <Link to='/privateroute' class="nav-item" style={{ padding: '5px' }}>
        Private Route
          </Link> */}
      {!context.authState
        ? <button onClick={() => context.authObj.login()}
          className='btn btn-success' >Login</button>
        : <button onClick={() => context.authObj.logout()}
          className='btn btn-danger'>Logout</button>
      }
    </div>
  );
};





export default Header;
