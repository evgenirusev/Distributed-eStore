import * as React from 'react';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { ICartProduct, ICartState, IOrder } from '../../state/cart';

type CartProductsProps = {
    cart: ICartState,
    changeQuantity: (productId: string, value: number) => void,
    onPlaceOrder: () => void
};

export const CartProducts: React.FC<CartProductsProps> = ({ cart, changeQuantity, onPlaceOrder }) => {
    const { productIdToCartProductMap } = cart;

    const totalCost = Object.values(productIdToCartProductMap).reduce((total, product) => {
        return total + product.price;
    }, 0);

    const onClick = (event) => {
        onPlaceOrder();
    }

    return (
        <>
            {Object.values(productIdToCartProductMap).map((cartProduct: ICartProduct, index: number) => {
                return <React.Fragment key={`cart-product-${index}`}>
                    <CartProduct cart={cartProduct} onQuantityChange={changeQuantity} />
                    <hr />
                </React.Fragment>
            })}
            <div>
                <strong className="d-block">Sub-total (inc. VAT) = ${totalCost}</strong>
                <strong>NB: VAT will be removed at checkout for Yearbook 5 purchases.</strong>
                <p>Free Returns. Free Repairs For Life.</p>
            </div>
            <hr />
            <div>
                <button onClick={ onClick }>Checkout</button>
            </div>
        </>
    );
}