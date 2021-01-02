import * as React from 'react';
import { ColorSwitcher } from '../';
import './Product.css';

type ProductProps = {
    id: string;
    name: string;
    price: number;
    color: string[];
    imageURL: string;
};

export const Product: React.FC<ProductProps> = ({
    id,
    name,
    price,
    color,
    imageURL
}) => {
    return <div className="cart-product">
        <a className="cart-product__link" href="#">
            <img sizes="100vw" src={imageURL} className="product__image"></img>
            <div className="cart-product__description">
                <p className="cart-product__name"> { name } </p>
                <p className="cart-product__color"> { color } </p>
                <p className="cart-product__price"> { price } </p>
            </div>
        </a>
    </div>
};