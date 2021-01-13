import * as React from 'react';
import { actionCreators } from '../../state/cart/cartActions';
import { connect } from 'react-redux';
import { IApplicationState } from '../../state/index';
import { ICartProduct, ICartState, IOrder, IOrderItem } from '../../state/cart';
import { CartProducts } from '../../components/cart/CartProducts';
import { isUserLoggedIn, getCurrentUserId } from '../../services/auth/authUtils';
import { useHistory } from 'react-router-dom';

type CartsProps = IApplicationState & typeof actionCreators;

const Cart: React.FC<CartsProps> = ({
    removeProductFromCart,
    placeOrder,
    cart,
    changeQuantity,
}) => {
    const isCartEmpty = (cart: ICartState) => Object.keys(cart.productIdToCartProductMap).length < 1;
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
            customerId: getCurrentUserId(),
            orderItems
        }
    }

    const onPlaceOrder = () => {
        if (isUserLoggedIn()) {
            placeOrder(buildOrder());
        } else {
            history.push("/login");
        }
    }

    return (
        <section className='cart'>
            {!isCartEmpty(cart)
                ? <CartProducts cart={cart} changeQuantity={changeQuantity} placeOrder={onPlaceOrder} />
                : <div className="cart__message">Your cart is empty</div> }  
        </section>
    );
};

export default connect((state: IApplicationState) => state, actionCreators)(Cart as any);