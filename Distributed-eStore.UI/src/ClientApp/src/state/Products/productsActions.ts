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
    requestProducts: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        if (getState()) {
            getAllPosts()
                .then((products: IProduct[]) => {
                    products.forEach(p => p.selectedColorIndex = defaultColorIndex);

                    dispatch({
                        products,
                        type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                    });
                }).catch(error => {
                    console.error(error);
                });
        }
    },
    selectProductColor: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        
    }
};