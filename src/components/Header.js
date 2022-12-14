import React from "react";
import logo from "../images/body.png";
import signUp from "../images/Social media/signUp.png"
import cart from "../images/Social media/cart.png"
import { Link, } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart_length = useSelector(state => state.cart.length)
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand fs-2" to="/">
              <img src={logo} alt="Logo" className="mx-3" width="65" height="60" />
              Body Building
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item mx-5">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link fs-5" to="/exercises">Exercises</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link fs-5" to="/dites">Diets</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link fs-5" to="/products" >Products</Link>
                </li>
                
                <li className="nav-item mx-4">
                  <Link to="contacts">
                    <img src={signUp} alt="Logo" className="mx-3" width="40" height="40" />
                  </Link>
                  <Link to="cart" className="text-dark text-decoration-none">
                    <img src={cart} alt="Logo" className="mx-2" width="40" height="40" />
                    <span >{cart_length}</span>
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header