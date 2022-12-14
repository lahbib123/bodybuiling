import React from "react";
import facebook from "../images/Social media/facebook.png";
import twitter from "../images/Social media/twitter.png";
import instagram from "../images/Social media/instagram.png";
import whatsapp from "../images/Social media/whatsapp.png";
import { Link, } from "react-router-dom";

function Footer(){
    return(
        <div>
            <footer className=" bg-light  p-5 " id="contacts">
    <div className="container">
        <h3 className="text-center">Can we help you?</h3>
        <div className="input-group me-5 text-center">
                <input type="text" className="form-control form-control-lg ms-5 " placeholder="How can we help you ?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary w-5" type="button" id="button-addon2" >Search</button>
        </div>
        <div className="mt-3 text-center">
            <Link className="navbar-brand m-2" to="https://www.facebook.com/">
                <img src={facebook} alt="facebook" width="30" height="30" />
            </Link>
            <Link className="navbar-brand m-2" to="https://twitter.com/?lang=en">
                <img src={twitter} alt="twitter" width="35" height="30" />
            </Link>
            <Link className="navbar-brand m-2" to="https://www.instagram.com/?hl=en">
                <img src={instagram} alt="instagram" width="35" height="30"/>
            </Link>
            <Link className="navbar-brand m-2" to="https://www.whatsapp.com/">
                <img src={whatsapp} alt="whatsapp" width="40" height="30"/>
            </Link>
          </div>

    </div>
</footer>
            
        </div>
        
             
    )
}

export default Footer;