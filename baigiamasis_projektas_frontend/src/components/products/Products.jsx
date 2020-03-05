import React from 'react';

function Products(props) {
    const products = props.products.map(product => (
        <p>{product.name}
            {product.description}
        </p>
    ))
    return (
        <div className="container">
            {products}
        </div>
    );
}

export default Products;