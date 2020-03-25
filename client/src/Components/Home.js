import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME SWEET HOME </h1>
      <Link to='/profile'>Profile</Link>
    </div>
  );
};

export default Home;
