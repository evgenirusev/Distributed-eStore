import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { ICartState, IOrder, IOrderItem } from '../../state/cart';
import { CartProducts } from '../../components/cart/CartProducts';
import { useHistory } from 'react-router-dom';
import "./Cart.css";

type CartsProps = IApplicationState & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    cart,
    changeQuantity,
    user
}) => {
    const isCartEmpty = (shoppingCart: ICartState) => Object.keys(shoppingCart.productIdToCartProductMap).length < 1;
    const history = useHistory();

    const buildOrder = (): IOrder => {
        const orderItems: IOrderItem[] = Object.values(cart.productIdToCartProductMap)
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

    const onPlaceOrder = () => {
        if (user.isLoggedIn) {
            placeOrder(buildOrder());
        } else {
            history.push("/login");
        }
    }

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} changeQuantity={changeQuantity} onPlaceOrder={onPlaceOrder} />
                : <><h1 className="cart__message">Your cart is empty</h1><hr/></> }  
        </section>
    );
};

const mapStateToProps = (state: IApplicationState) => {
    return { user: state.user, cart: state.cart };
}

export default connect(mapStateToProps, actionCreators)(Cart as any);