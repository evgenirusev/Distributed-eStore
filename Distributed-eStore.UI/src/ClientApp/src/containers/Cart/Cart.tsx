import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { ICartState } from '../../state/cart';
import { CartProducts } from './CartProducts';

type CartsProps = IApplicationState & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    cart,
    changeQuantity
}) => {
    console.log(cart);
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;

    const onCheckout = (event) => {
        event.preventDefault();
    }

    const onQuantityChange = (productId: string, value: number) => {
        changeQuantity(productId, value);
    }

    return (
        <section className='cart'>
            {Object.values(cart.productIdToCartProductMap)[0].quantity}
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} onQuantityChange={ onQuantityChange } />
                : <div className="cart__message">your cart is empty</div>}  
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);