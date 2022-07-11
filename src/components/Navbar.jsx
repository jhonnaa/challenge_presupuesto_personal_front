import React from "react";

export const Navbar = () => {
  const menuChange = () => {
    document.querySelector(".menu-icon").classList.toggle("active");
    document.querySelector(".navigation-menu").classList.toggle("active");
    document.querySelector(".menu-icon i").classList.toggle("fa-times");
  };

  return (
    <React.Fragment>
      <header>
        <div className="inner-width">
          <div className="titulo">
            <span>P</span>
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>U</span>
            <span>P</span>
            <span>U</span>
            <span>E</span>
            <span>S</span>
            <span>T</span>
            <span>0</span>
            <span> </span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
            <span>O</span>
            <span>N</span>
            <span>A</span>
            <span>L</span>
          </div>
          

          <div className="cont-menu">
            <li><a href="">hola personaaaa</a></li>
            <li><a href="">salir</a></li>
          </div>
          <div className="menu-icon" onClick={menuChange}>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <div className="navigation-menu">
        <nav>
          <li>
            <a href="">registrate</a>
          </li>
          <li>
            <a href="">ingresa</a>
          </li>
          <li>
            <a href="">ghhhhh</a>
          </li>
        </nav>
      </div>
    </React.Fragment>
  );
};
