import React, {Component} from 'react';
import Products from "../products/Products";
import Categories from "../categories/Categories";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {allProducts: [], allCategories: []};
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
                    <Categories categories = {this.state.allCategories}/>
                </div>
            </main>
        );

    }

}
export default Main;