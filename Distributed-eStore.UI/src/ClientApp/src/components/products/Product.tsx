import { IProduct } from '../../state/products/';
import * as React from 'react';

const Product: React.FC<IProduct> = ({
    name,
    description,
    price,
    colors,
    imageURLs
}) => {
    return <div className="product">
        <a href="route to /product?id">
                <img sizes="100vw" src={imageURLs[0]} className="product__image"></img>
                <p className="product__name">
                </p>
                <p className="product__price">
                    <span className="price">$88</span>
                </p>
        </a>
        <div className="product__color-switcher">
            
        </div>
    </div>
}