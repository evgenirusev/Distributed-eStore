import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { ICartState, IOrder, IOrderItem } from '../../state/cart';
import { CartProducts } from '../../components/cart/cartProducts/CartProducts';
import { useHistory } from 'react-router-dom';
import "./Cart.css";

type CartsProps = IApplicationState & typeof actionCreators;

const isCartEmpty = (shoppingCart: ICartState) => Object.keys(shoppingCart.productIdToCartProductMap).length < 1;

const buildOrder = (shoppingCart: ICartState, user: any): IOrder => {
    const orderItems: IOrderItem[] = Object.values(shoppingCart.productIdToCartProductMap)
        .reduce((orderItems: IOrderItem[], { id, quantity, size }) => {
            return orderItems.concat({
                productId: id,
                size,
                quantity
            });
        }, []);

    return {
        customerId: user.user.id,
        orderItems
    }
}

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    cart,
    changeQuantity,
    user,
    removeAllProductsFromCart
}) => {
    const history = useHistory();   

    const onPlaceOrder = () => {
        if (user.isLoggedIn) {
            placeOrder(buildOrder(cart, user));
            removeAllProductsFromCart();
            history.push("/orders/success");
        } else {
            history.push("/login");
        }
    }

    const onChangeQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeProductFromCart(productId);
        } else {
            changeQuantity(productId, quantity);
        }
    }

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} changeQuantity={onChangeQuantity} onPlaceOrder={onPlaceOrder} />
                : <><h1 className="cart__message">Your cart is empty</h1><hr/></> }  
        </section>
    );
};

const mapStateToProps = (state: IApplicationState) => {
    return { user: state.user, cart: state.cart };
}

export default connect(mapStateToProps, actionCreators)(Cart as any);