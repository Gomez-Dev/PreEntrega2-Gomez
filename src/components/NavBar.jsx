import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src={"img/Hikvision-Logo.png"} alt={"Hikvision"} width={90} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={"/category/Camaras"}>Camaras</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/Alarmas"}>Alarmas</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/Combos"}>Combos</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"/category/Promociones"}>Promociones</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <CartWidget/>
            </div>
        </div>
        
    )
}

export default NavBar