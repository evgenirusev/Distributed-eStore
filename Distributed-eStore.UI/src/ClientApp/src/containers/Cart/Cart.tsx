import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { CartProduct } from '../../components/cart/cartProduct/CartProduct';
import { ICartProduct, ICartState } from '../../state/cart';

type CartsProps = IApplicationState & typeof actionCreators;

type CartProductsProps = {
    cart: ICartState,
    onQuantityChange: (productId: string) => void
};

const CartProducts: React.FC<CartProductsProps> = ({ cart, onQuantityChange }) => {
    const { productIdToCartProductMap } = cart;

    const totalCost = Object.values(productIdToCartProductMap).reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <>
            {Object.values(productIdToCartProductMap).map((cartProduct: ICartProduct, index: number) => {
                return <React.Fragment key={`cart-product-${index}`}>
                    <CartProduct cart={ cartProduct } onQuantityChange={ onQuantityChange } />
                    <hr />
                </React.Fragment>
            })}
            <div>
                <strong className="d-block">Sub-total (inc. VAT) = ${totalCost}</strong>
                <strong>NB: VAT will be removed at checkout for Yearbook 5 purchases.</strong>
                <p>Free Returns. Free Repairs For Life.</p>
            </div>
            <hr/>
            <div>
                <button>Checkout</button>
            </div>
        </>
    );
}

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    products,
    cart
}) => {
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;

    const onCheckout = (event) => {
        event.preventDefault();
    }

    const onQuantityChange = (productId) => {
        
    }

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} onQuantityChange={ onQuantityChange } />
                : <div className="cart__message">your cart is empty</div>}  
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);