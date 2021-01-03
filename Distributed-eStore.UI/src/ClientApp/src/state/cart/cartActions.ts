import { CartActionTypes } from '.';
import { IAppThunkAction, ReduxAction } from '../';

export const actionCreators = {
    addProductToCart: (productId: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.ADD_TO_CART,
            productId
        });
    },
    removeProductFromCart: (productId: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            productId
        });
    },
    incrementProductQuantity: (productId: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.INCREMENT_PRODUCT_QUANTITY,
            productId
        });
    },
    decrementProductQuantity: (productId: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.DECREMENT_PRODUCT_QUANTITY,
            productId
        });
    },
    placeOrder: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.PLACE_ORDER
        });
    }
};