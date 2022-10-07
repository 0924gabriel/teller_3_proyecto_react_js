
// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal blanco.svg";

import "./nav.css";



function nav() {



    return (
        <nav className="index-nav">
           <div class="logo">
                <img src={logov} alt="logo" />
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="menu ">
                <Link href="#nosotros" className="item">Inicio</Link>
                <Link href="#ubicanos" className="item">Ubícanos</Link>
                <Link className="#puntuacion">Opiniones</Link>
                <hr class="menu-hr" noshade="" />

                <Link to='/login' className="item"><a href="login.html" class="item">
                    <button class="navbar-button"><i class="fa-solid fa-user"></i>Iniciar Sesión</button></a> </Link>
            </div>
        </nav>




    );


}


export default nav;
