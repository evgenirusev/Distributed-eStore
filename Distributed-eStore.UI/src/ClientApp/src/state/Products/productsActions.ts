import { getProductsFemale, getProductsMale, getProductsAccessories, getProductById } from '../../services/api/';
import { IProduct } from '../products/';
import { IApplicationState, IAppThunkAction, ReduxAction } from '../';
import { ProductsActionTypes } from './productsTypes';
import { DEFAULT_COLOR_INDEX, ProductCategories } from '../../constants';
import { AxiosResponse } from 'axios';

export const actionCreators = {
    requestProductsFemale: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_FEMALE, dispatch,
            getProductsFemale, ProductCategories.FEMALE);
    },
    requestProductsMale: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_MALE, dispatch,
            getProductsMale, ProductCategories.MALE);
    },
    requestProductsAccessories: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        requestProductsAndDispatch(getState(), ProductsActionTypes.REQUEST_PRODUCTS_ACCESSORIES, dispatch,
            getProductsAccessories, ProductCategories.ACCESSORIES);
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

async function requestProductsAndDispatch(state: IApplicationState, actionType: ProductsActionTypes,
    dispatch: any, requestProducts: () => Promise<AxiosResponse<IProduct[]>>, category: ProductCategories) {
    if (state && state.products.currentCategory !== category &&
        !categoryAlreadyExists(state.products.productIDsToProductsMap, category)) {

        try {
            const products: IProduct[] = (await requestProducts()).data;
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

function categoryAlreadyExists(productIDsToProductsMap: Record<string, IProduct>, category: ProductCategories): boolean {
    Object.values(productIDsToProductsMap).forEach(product => {
        if (product.category === category) {
            return true;
        }
    });

    return false;
}