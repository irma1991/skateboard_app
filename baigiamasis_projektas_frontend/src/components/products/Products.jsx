import React from 'react';
import './products.scss';

function Products(props) {
    const products = props.products.map(product => (
        <p>{product.name}
            {product.description}
            {product.price}
        </p>
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
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{products}</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project Two</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                                aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio,
                                alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project Three</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project Four</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                                aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio,
                                alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project Five</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 portfolio-item">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">Project Six</a>
                            </h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                                aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio,
                                alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

);
}

export default Products;