import { getAllPosts } from '../../services/api/';
import { IProduct } from '../products/';
import { IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';
import { AxiosResponse } from 'axios';

interface IRequestAllProductsAction {
    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL;
    products: IProduct[];
}

export type KnownAction = IRequestAllProductsAction;

const defaultColorIndex = 0;

export const actionCreators = {
    requestProducts: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        if (getState()) {
            try {
                const products: IProduct[] = (await getAllPosts()).data;
                products.forEach(p => p.selectedColorIndex = defaultColorIndex);

                dispatch({
                    products,
                    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                });
            } catch (error) {
                console.error(error);
            }
        }
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