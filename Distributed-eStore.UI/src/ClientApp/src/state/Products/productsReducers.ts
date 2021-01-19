import { ReduxAction } from '../';
import { ProductCategories } from '../../constants';
import { IProduct, IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    categoryToProductMaps: {},
    currentCategory: ProductCategories.FEMALE
};

const shouldUpdateColor = (product: IProduct, colorIndex: number) => product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined";

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;

    switch (action.type) {
        case ProductsActionTypes.REQUEST_PRODUCTS_FEMALE:
            const { products } = action;
            const currentCategory = ProductCategories.FEMALE;

            return {
                ...state,
                currentCategory,
                categoryToProductMaps: {
                    ...state.categoryToProductMaps,
                    [currentCategory]: products
                }
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
                            [currentCategory]: {
                                products,
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
                //const { product } = action;

                //if (product) {
                //    return {
                //        ...state,
                //        productIDsToProductsMap: {
                //            ...state.productIDsToProductsMap,
                //            [product.id]: {
                //                ...product
                //            }
                //        }
                //    }
                //}
            }
        default:
            return state;
    }
};