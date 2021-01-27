import { CartActionTypes } from '.';
import { IAppThunkAction, ReduxAction } from '../';
import { createOrder } from '../../services/api/createOrder';
import { ICartProduct, IOrder } from './cartTypes';

export const actionCreators = {
    addProductToCart: (cartProduct: ICartProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.ADD_TO_CART,
            cartProduct
        });
    },
    removeProductFromCart: (productId: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            productId
        });
    },
    removeAllProductsFromCart: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        Object.keys(getState().cart.productIdToCartProductMap).forEach(productId => {
            dispatch({
                type: CartActionTypes.REMOVE_FROM_CART,
                productId
            });
        });
    },
    changeQuantity: (productId: string, quantity: number): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.CHANGE_QUANTITY,
            productId,
            quantity
        });
    },
    placeOrder: (order: IOrder): IAppThunkAction<ReduxAction> => async(dispatch, getState) => {
        try {
            await createOrder(order);

            dispatch({
                type: CartActionTypes.CHANGE_QUANTITY,
            });
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            // technical debt
            console.error(`Order creation failed - ${message}`);
        }
    }
};