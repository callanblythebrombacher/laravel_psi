import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./shared_components/header.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home.component";

function App() {
    return (
    <div>
        <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>>
            </Routes>
        </BrowserRouter>
        </React.StrictMode>
    </div>);
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}


