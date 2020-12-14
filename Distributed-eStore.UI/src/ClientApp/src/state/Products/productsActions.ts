import { getAllPosts } from '../../api';
import { IProduct } from '../products/';
import { AppThunkAction } from '../';
import { ProductsActionTypes } from './productsTypes';

interface RequestProductsAction {
    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL;
    products: Readonly<IProduct[]>;
}

type KnownAction = RequestProductsAction; // Extend with other action types

export const actionCreators = {
    requestAllProducts: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        if (getState()) {
            getAllPosts()
                .then((products: Readonly<IProduct[]>) => {
                    dispatch({
                        type: ProductsActionTypes.REQUEST_ALL_ARRIVAL,
                        products
                    });
                }).catch(error => {
                    console.log(error);
                });
        }
    }
};