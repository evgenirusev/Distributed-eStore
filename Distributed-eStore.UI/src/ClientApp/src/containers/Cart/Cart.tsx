import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { ICartState } from '../../state/cart';
import { CartProducts } from '../../components/cart/CartProducts';

type CartsProps = IApplicationState & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    cart,
    changeQuantity,
}) => {
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} changeQuantity={changeQuantity} placeOrder={placeOrder} />
                : <div className="cart__message">Your cart is empty</div> }  
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);