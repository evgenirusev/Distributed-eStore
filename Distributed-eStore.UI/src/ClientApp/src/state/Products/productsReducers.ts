import { ReduxAction } from '../';
import { ProductCategories } from '../../constants';
import { IProduct, IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    productIDsToProductsMap: {},
    currentCategory: ProductCategories.FEMALE
};

const shouldUpdateColor = (product: IProduct, colorIndex: number) => product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined";

const composeProducts = (state: IProductsListState, currentCategory: ProductCategories, products: IProduct[]) => {
    return {
        currentCategory,
        productIDsToProductsMap: {
            ...state.productIDsToProductsMap, ...products.reduce((acc: Record<string, IProduct>, product: IProduct) => {
            acc[product.id] = product;
            return acc;
        }, {})}
    };
}

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;

    switch (action.type) {
        case ProductsActionTypes.REQUEST_PRODUCTS_FEMALE:
            {
                return composeProducts(state, ProductCategories.FEMALE, action.products);
            }
        case ProductsActionTypes.REQUEST_PRODUCTS_MALE:
            {
                return composeProducts(state, ProductCategories.MALE, action.products);
            }
        case ProductsActionTypes.REQUEST_PRODUCTS_ACCESSORIES:
            {
                return composeProducts(state, ProductCategories.ACCESSORIES, action.products);
            }
        case ProductsActionTypes.SELECT_PRODUCT_COLOR:
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
                            [product.id]: product
                        }
                    }
                }
            }
        default:
            return state;
    }
};