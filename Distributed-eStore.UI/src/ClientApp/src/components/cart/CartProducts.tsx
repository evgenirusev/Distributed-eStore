import * as React from 'react';
import { useHistory } from 'react-router';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { isUserLoggedIn, getCurrentUserId } from '../../services/auth/authUtils';
import { ICartProduct, ICartState, IOrder, IOrderItem } from '../../state/cart';

type CartProductsProps = {
    cart: ICartState,
    changeQuantity: (productId: string, value: number) => void,
    placeOrder: (order: IOrder) => void
};

export const CartProducts: React.FC<CartProductsProps> = ({ cart, changeQuantity, placeOrder }) => {
    const { productIdToCartProductMap } = cart;
    const history = useHistory();

    const totalCost = Object.values(productIdToCartProductMap).reduce((total, product) => {
        return total + product.price;
    }, 0);

    const onSubmit = (event) => {
        if (isUserLoggedIn()) {
            const orderItems: IOrderItem[] = ;
            placeOrder({
                customerId: getCurrentUserId(),

            });
        } else {
            history.push("/login");
        }
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
                <button onSubmit={ placeOrder }>Checkout</button>
            </div>
        </>
    );
}