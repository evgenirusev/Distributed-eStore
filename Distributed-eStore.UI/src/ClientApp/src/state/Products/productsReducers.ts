import { ReduxAction } from '../';
import { ProductCategories } from '../../constants';
import { IProduct, IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    categoryToProductMaps: {},
    currentCategory: ProductCategories.FEMALE
};

const shouldUpdateColor = (product: IProduct, colorIndex: number) => product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined";
const composeProducts = (state: IProductsListState, currentCategory: ProductCategories, action: ReduxAction) => {
    const { products } = action;

    return {
        ...state,
        currentCategory,
        categoryToProductMaps: {
            ...state.categoryToProductMaps,
            [currentCategory]: products
        }
    }
}

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;

    switch (action.type) {
        case ProductsActionTypes.REQUEST_PRODUCTS_FEMALE:
            {
                return composeProducts(state, ProductCategories.FEMALE, action);
            }
        case ProductsActionTypes.REQUEST_PRODUCTS_MALE:
            {
                return composeProducts(state, ProductCategories.MALE, action);
            }
        case ProductsActionTypes.REQUEST_PRODUCTS_ACCESSORIES:
            {
                return composeProducts(state, ProductCategories.ACCESSORIES, action);
            }
        case ProductsActionTypes.SELECT_PRODUCT_COLOR:
            {
                const { productId, colorIndex, productCategory } = action;
                const product = state.categoryToProductMaps[productCategory][productId];

                if (shouldUpdateColor(product, colorIndex)) {
                    return {
                        ...state,
                        categoryToProductMaps: {
                            ...state.categoryToProductMaps,
                            [productCategory]: {
                                ...state.categoryToProductMaps[productCategory],
                                [productId]: {
                                    ...state.categoryToProductMaps[productId],
                                    selectedColorIndex: colorIndex
                                }
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
                        categoryToProductMaps: {
                            ...state.categoryToProductMaps,
                            [product.category]: {
                                ...state.categoryToProductMaps[product.category],
                                [product.id]: product
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }
};