import { ReduxAction } from '../';
import { IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    products: []
};

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;
    switch (action.type) {
        case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            const { products } = action;
            return {
                ...state,
                products
            };
        case ProductsActionTypes.SELECT_PRODUCT_COLOR:
            const { productId, colorIndex } = action;
            const product = state.products.find(product => product.id === productId);

            if (product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined") {
                const updatedProducts = state.products.map(product => {
                    return product.id === productId
                        ? { ...product, selectedColorIndex: colorIndex }
                        : product;
                });

                return {
                    products: updatedProducts
                };
            }
        default:
            return state;
    }
};