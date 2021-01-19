import { ReduxAction } from '../';
import { IProduct, IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    productIDsToProductsMap: {}
};

const shouldUpdateColor = (product: IProduct, colorIndex: number) => product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined";

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;

    switch (action.type) {
        case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            const { products } = action;

            return {
                ...state,
                productIDsToProductsMap: products.reduce((acc: { [key: string]: IProduct }, product: IProduct) => {
                    acc[product.id] = product;
                    return acc;
                }, {}),
            };
        case ProductsActionTypes.SELECT_PRODUCT_COLOR_FROM_PRODUCT_LIST:
            {
                const { productId, colorIndex } = action;
                const product = state.productIDsToProductsMap[productId];

                if (shouldUpdateColor(product, colorIndex)) {
                    return {
                        ...state,
                        productIDsToProductsMap: {
                            ...state.productIDsToProductsMap,
                            [productId]: {
                                ...state.productIDsToProductsMap[productId],
                                selectedColorIndex: colorIndex
                            }
                        }
                    }
                }
            }
        case ProductsActionTypes.REQUEST_BY_ID_ARRIVAL:
            {
                const { product } = action;

                if (product) {
                    return {
                        ...state,
                        productIDsToProductsMap: {
                            ...state.productIDsToProductsMap,
                            [product.id]: {
                                ...product
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }
};