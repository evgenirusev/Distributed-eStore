import { getAllPosts } from '../../api';
import { Product } from '../products/';
import { AppThunkAction } from '../';
import { ProductsActionTypes } from './productsTypes';

interface RequestProductsAction {
    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL;
    products: Readonly<Product[]>;
}

type KnownAction = RequestProductsAction; // Extend with other action types

export const actionCreators = {
    requestAllProducts: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        if (getState()) {
            getAllPosts()
                .then((products: Readonly<Product[]>) => {
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