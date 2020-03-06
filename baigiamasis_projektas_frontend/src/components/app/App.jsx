import React from 'react';
import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Product from "../product/Product";

import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="container">
            <Router>
                <Navigation/>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/product/:id" component={Product}/>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;