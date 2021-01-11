import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { actionCreators as productActionCreators } from '../../state/products/productsActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { ICartProduct, ICartState } from '../../state/cart';

type CartsProps = IApplicationState & typeof actionCreators & typeof productActionCreators;

const Cart: React.FC<CartsProps> = ({
    addProductToCart,
    removeProductFromCart,
    placeOrder,
    products,
    cart,
    requestProducts
}) => {
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;

    return (
        <section className='cart'>
            <div>{!isCartEmpty(cart)
                ? Object.values(cart.productIdToCartProductMap)
                    .map((cartProduct: ICartProduct, index: number) => {
                        return <>
                            <CartProduct key={`cart-product-${index}`} {...cartProduct} />
                            <hr />
                        </>
            }) : <div className="cart__message">your cart is empty</div>}</div>
        </section>
    );
};

export default connect((state: IApplicationState) => state, { ...actionCreators, ...productActionCreators })(Cart as any);