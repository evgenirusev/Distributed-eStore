import { getAllPosts } from '../../api';
import { IProduct } from '../products/';
import { IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';

interface IRequestAllProductsAction {
    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL;
    products: Readonly<IProduct[]>;
}

export type KnownAction = IRequestAllProductsAction;

export const actionCreators = {
    requestProducts: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        if (getState()) {
            getAllPosts()
                .then((products: Readonly<IProduct[]>) => {
                    dispatch({
                        products,
                        type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                    });
                }).catch(error => {
                    console.log(error);
                });
        }
    }
};