import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { ICartProduct, ICartState } from '../../state/cart';

type CartsProps = IApplicationState & typeof actionCreators;

const CartProducts: React.FC<ICartState> = ({ productIdToCartProductMap }) => {
    return (
        <>{Object.values(productIdToCartProductMap).map((cartProduct: ICartProduct, index: number) => {
            return <React.Fragment key={`cart-product-${index}`}>
                <CartProduct {...cartProduct} />
                <hr />
            </React.Fragment>
        })}</>
    );
}

const Cart: React.FC<CartsProps> = ({
    addProductToCart,
    removeProductFromCart,
    placeOrder,
    products,
    cart
}) => {
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                    ? <CartProducts productIdToCartProductMap={ cart.productIdToCartProductMap }/>
                    : <div className="cart__message">your cart is empty</div>}  
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);