import { getAllPosts } from '../../services/api/';
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
            try {
                getAllPosts().then((products: IProduct[]) => {
                    products.forEach(p => p.selectedColorIndex = defaultColorIndex);

                    dispatch({
                        products,
                        type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                    });
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