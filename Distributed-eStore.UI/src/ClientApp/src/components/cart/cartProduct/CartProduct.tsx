import * as React from 'react';
import { ICartProduct } from '../../../state/cart';

export const CartProduct: React.FC<ICartProduct> = ({
    id,
    name,
    price,
    color,
    imageURL
}) => {
    return <div className="cart-product">
        <a href={`/products/${id}`}>
            <div className="d-flex justify-content-between">
                <div className="">
                    <img sizes="100vw" src={imageURL} className="product__image"></img>
                </div>
                <div className="">
                    <p className="cart-product__name"> {name} </p>
                </div>
                <div className="">
                    <p className="cart-product__color"> {color} </p>
                </div>
                <div className="">
                    <p className="cart-product__price"> {price} </p>
                </div>
            </div>
        </a>
    </div>
};