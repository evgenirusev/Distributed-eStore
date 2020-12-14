import { IProduct } from '../../state/products/';
import * as React from 'react';

type ProductProps = IProduct;

const Product: React.FC<ProductProps> = ({
    id,
    name,
    description,
    price,
    colors,
    imageURLs
}) => {
    return <div className="product">
        <a href="route to /product?id">
                <img sizes="100vw" alt="" src="insert cnd url here" className="product__image"></img>
                <p className="product__name">
                </p>
                <p className="product__price">
                    <span className="price">$88</span>
                </p>
        </a>
    </div>
    // note - create colors switcher here later
}