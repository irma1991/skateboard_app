import React, {Component} from 'react';
import Products from "../products/Products";
import Orders from "../orders/Orders";

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
                    })
                }
            )
    }
    render(){
        return(
            <main>
                <div class = "container">
                <Products products = {this.state.allProducts}/>
                    <Orders/>
                </div>
            </main>
        );

    }

}
export default Main;