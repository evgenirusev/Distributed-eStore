import { IAppThunkAction, ReduxAction } from '../';
import { IProduct } from '../products';

export const actionCreators = {
    addProductToCart: (product: IProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
    },
    removeProductFromCart: (productId: IProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
    },
    incrementProductQuantity: (productId: IProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
    },
    decrementProductQuantity: (productId: IProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
    },
    placeOrder: (productId: IProduct): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
    }
};