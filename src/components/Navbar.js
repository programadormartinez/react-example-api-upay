import React from 'react';
import { Link } from 'react-router-dom';
import { Categories } from './Categories';

export const Navbar = () => {
  return (
    <>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/">
              <img src="https://www.u-payments.com/assets/logo/logo-upayments.svg" alt="" width="100" height="60" className="d-inline-block align-text-top" />
            </Link>
            <Categories></Categories>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};
