import React, {Component} from 'react';
import{
    Link
} from "react-router-dom";

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    componentDidMount() {
        fetch(`http://skateboard.test/api/product/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        product: data
                    })
                }
            )
    }
    render(){
        const productId = localStorage.setItem('id', this.state.product.id);
        return(
                <div className = "container">
                    <div className="col-lg-6 portfolio-item">
                        <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{this.state.product.id}</a>
                                    <a href="#">{this.state.product.name}</a>
                                    <a href="#">{this.state.product.description}</a>
                                    <a href="#">{this.state.product.price}</a>
                                    <Link to="/orders" class="btn btn-secondary">Uzsakyti</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
        );

    }

}
export default Product;