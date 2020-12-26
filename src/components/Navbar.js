import React from "react";
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper blue" >
        <Link to="/" class="brand-logo center">
          Book Finder
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
