import React from 'react';
import './products.scss';

function Products(props) {
    const products = props.products.map(product => (
        <div className="col-lg-6 portfolio-item">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{product.name}</a>
                    </h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
            </div>
        </div>


    ))
    return (
        <div className="container">
            <h1 className="mt-4 mb-3">Portfolio 2
            <small>Subheading</small>
        </h1>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Portfolio 2</li>
            </ol>

            <div className="row">
                {products}
            </div>
        </div>

);
}

export default Products;