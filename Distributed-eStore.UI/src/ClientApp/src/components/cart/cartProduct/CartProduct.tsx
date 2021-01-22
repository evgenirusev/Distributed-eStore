import * as React from 'react';
import { ICartProduct } from '../../../state/cart';
import "./CartProduct.css"; 

type CartProductProps = {
    cart: ICartProduct,
    onQuantityChange: (productId: string, value: number) => void
};

export const CartProduct: React.FC<CartProductProps> = ({
    cart,
    onQuantityChange
}) => {
    const { id, name, price, color, imageURL, size, quantity, } = cart;

    const onChange = (event) => {
        const { value } = event.target;
        onQuantityChange(id, value);
    }

    return <div className="cart-product">
            <div className="d-flex justify-content-between">
                    <div className="cart-product__item">
                        <a href={`/products/${id}`}>
                            <img src={imageURL} className="cart-product__image"></img>
                        </a>
                    </div>
                    <div className="cart-product__item">
                        <p>Item</p>
                        <i className="cart-product__name text-danger"> {name} </i>
                        <strong className="cart-product__price d-block"> ${price} </strong>
                        <strong className="d-block">Color - {color} </strong>
                        <strong className="d-block">Size - {size} </strong>
                   </div>
                   <div className="cart-product__item">
                        <p>Quantity:</p>
                        <input type="number" className="cart-product__input" onChange={ onChange } value={ quantity }/>
                    </div>
                </div>
            </div>
};