import "../styles/App.css"
import React from "react";
import { Link, } from "react-router-dom";

function Home(){
    return(
        <section id="home">
            <div className="container-fluid px-0 top-banner bg-dark">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6 m-5 ">
                        <h1 className="text-white display-3">Bodybuilding for beginners:</h1>
                        <p className="text-white  m-2">Do you want to start practicing bodybuilding exercises? 
                        Then you should know the most prominent rules and tips for bodybuilding for beginners.</p>
                        <div className="mt-4 ">
                            <li className="nav-item mx-4">
                                <Link className="nav-link fs-5 btn btn-danger" to="/contacts" ><button type="button" className="btn btn-danger ">Sign Up<i className="fas fa-shopping-basket ps-3"> 
                                </i></button></Link>
                            </li>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Home



