import React from 'react';
import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

function App() {
    return (
        <div className="container">
            <Navigation/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;