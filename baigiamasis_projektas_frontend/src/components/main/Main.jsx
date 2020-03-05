import React, {Component} from 'react';
import Products from "../products/Products";
import Orders from "../orders/Orders";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {allProducts: []};
    }

    componentDidMount() {
        fetch(`http://skateboard.test/api/all-products`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        allProducts: data
                    }, () => console.log(this.state.allProducts))
                }
            )
    }
    render(){
        return(
            <main>
                <div class = "container">
                <Products products = {this.state.allProducts}/>
                </div>
            </main>
        );

    }

}
export default Main;