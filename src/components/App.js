import React from "react";
import Header from "./Header";
import Section from "./Section.js";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

function  App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Section />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}
export default App

