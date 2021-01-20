import { getProductsFemale, getProductsMale, getProductsAccessories ,getProductById } from '../../services/api/';
import { IProduct } from '../products/';
import { IApplicationState, IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';
import { DEFAULT_COLOR_INDEX } from '../../constants';

const requestProductsAndDispatch = async (state: IApplicationState, actionType: ProductsActionTypes, dispatch: any) => {
        if (state) {
            try {
                const products: IProduct[] = (await getProductsFemale()).data
                products.forEach(p => p.selectedColorIndex = DEFAULT_COLOR_INDEX);

                dispatch({
                    products,
                    type: actionType
                });
            } catch (error) {
                // technical debt - handle this on client side
                console.error(error);
            }
        }
}

export const actionCreators = {
    requestProductsFemale: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_FEMALE, dispatch);
    },
    requestProductsMale: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_MALE, dispatch);
    },
    requestProductsAccessories: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_ACCESSORIES, dispatch);
    },
    selectProductColorFromProductList: (productId: string, productCategory: string, colorIndex: number): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        dispatch({
            state: getState(),
            type: ProductsActionTypes.SELECT_PRODUCT_COLOR,
            productId,
            productCategory,
            colorIndex
        });
    },
    requestProductById: (productId: string, productCategory: string): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
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