import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <>
      <div class="container-fluid pl-0 pr-0">
        <nav class="navbar navbar-expand-xl navbar-dark ">
          <Link class="navbar-brand" to='/' onClick={scrollToTop}>
            <div style={{backgroundColor:"black",color: 'white',fontFamily:'sans-serif',letterSpacing:'2px',fontSize:'65%',padding:'20px 10px',borderRadius:'10px',fontWeight:'bold',display:'-webkit-inline-flex'}}>
               QUIZ
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ul class="navbar-nav">
              <li class="nav-item active px-2" onClick={scrollToTop}>
                <Link class="nav-link navhove" to="/about">
                  Contact
                </Link>
              </li>
            </ul>

            <Link to="/playtowin">
              <button className="playToWinBtn" onClick={scrollToTop}>Blog</button>
            </Link>
          </div>
        </nav>
      </div>
      
    </>
  );
};

export default Navbar;
