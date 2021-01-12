import { CartActionTypes } from '.';
import { IAppThunkAction, ReduxAction } from '../';
import { ICartProduct } from './cartTypes';

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
    placeOrder: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            type: CartActionTypes.PLACE_ORDER
        });
    }
};