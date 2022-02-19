import React from 'react';
import * as ReactDOM from "react-dom";
import Home from "./components/pages/home.component";
import Header from "./components/shared_components/header.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/shared_components/footer.component";

export default function App () {
    return(
        <div id='app'>
            <BrowserRouter >
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('app')
)
