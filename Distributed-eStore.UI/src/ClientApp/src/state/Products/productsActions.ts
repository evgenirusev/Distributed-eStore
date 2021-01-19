import { getAllProducts, getProductById } from '../../services/api/';
import { IProduct } from '../products/';
import { IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';
import { DEFAULT_COLOR_INDEX } from '../../constants';

export const actionCreators = {
    requestProducts: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        if (getState()) {
            try {
                const products: IProduct[] = (await getAllProducts()).data;
                products.forEach(p => p.selectedColorIndex = DEFAULT_COLOR_INDEX);

                dispatch({
                    products,
                    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                });
            } catch (error) {
                // technical debt - handle this on client side
                console.error(error);
            }
        }
    },
    selectProductColorFromProductList: (productId: string, colorIndex: number): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            state: getState(),
            type: ProductsActionTypes.SELECT_PRODUCT_COLOR_FROM_PRODUCT_LIST,
            productId,
            colorIndex
        });
    },
    requestProductById: (productId: string): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        if (getState() && !getState().products.productIDsToProductsMap[productId]) {
            try {
                const product: IProduct = (await getProductById(productId)).data;
                product.selectedColorIndex = DEFAULT_COLOR_INDEX;

                dispatch({
                    product,
                    type: ProductsActionTypes.REQUEST_BY_ID_ARRIVAL
                });
            } catch (error) {
                // technical debt - handle this on client side
                console.error(error);
            }
        }
    }
};