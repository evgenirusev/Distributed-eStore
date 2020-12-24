import { getAllPosts } from '../../api';
import { IProduct } from '../products/';
import { IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';

interface IRequestAllProductsAction {
    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL;
    products: IProduct[];
}

export type KnownAction = IRequestAllProductsAction;

const defaultColorIndex = 0;

export const actionCreators = {
    requestProducts: (firstName: string, lastName: string, email: string, password: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        
    },
    selectProductColor: (productId: string, colorIndex: number): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            state: getState(),
            type: ProductsActionTypes.SELECT_PRODUCT_COLOR,
            productId,
            colorIndex
        });
    }
};