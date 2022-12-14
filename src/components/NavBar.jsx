import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={"img/Hikvision-Logo.png"} alt={"Hikvision"} width={90} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Camaras</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">alarmas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Combos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Promociones</a>
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