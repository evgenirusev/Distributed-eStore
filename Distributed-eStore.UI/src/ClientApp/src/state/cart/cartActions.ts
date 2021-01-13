import { CartActionTypes } from '.';
import { IAppThunkAction, ReduxAction } from '../';
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
    changeQuantity: (productId: string, quantity: number): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.CHANGE_QUANTITY,
            productId,
            quantity
        });
    },
    placeOrder: (order: IOrder): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        try {
            await register(userData.firstName, userData.lastName, userData.email, userData.password, userData.role);

            dispatch({
                type: UserActionTypes.REGISTRATION_SUCCESS,
            });
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            dispatch({
                type: UserActionTypes.REGISTRATION_FAILED,
            });

            // technical debt
            alert(`Registration failed - ${message}`);
        }

        // todo: place order success, maybe consider processing place order or smth.
        //dispatch({
        //    type: CartActionTypes.PLACE_ORDER
        //});
    }
};