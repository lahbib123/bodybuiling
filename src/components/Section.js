import React from "react";
import {Routes, Route } from "react-router-dom"; 
import Home from "./Home"
import Exercises from "./Exercises"
import Dites from "./Dites"
import Products from "./Products"
import Contacts from "./Contacts"
import Cart from "./Cart";

function Section() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/exercises" element={<Exercises/>}></Route>
            <Route path="/dites" element={<Dites/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    )
}
export default Section
