import { ReduxAction } from '../';
import { IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    productIDsToProductsMap: {}
};

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;

    switch (action.type) {
        case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            const { products } = action;

            return products.reduce((acc, product) => {
                acc[product.id] = product;
                return acc;
            }, {});
        case ProductsActionTypes.SELECT_PRODUCT_COLOR:
            const { productId, colorIndex } = action;
            const product = state.productIDsToProductsMap[productId];

            if (product && product.selectedColorIndex !== colorIndex && typeof product.colors[colorIndex] !== "undefined") {
                const modifiedState = Object.assign({}, state);
                console.log(modifiedState);
                modifiedState.productIDsToProductsMap[product.id].selectedColorIndex = colorIndex;

                return modifiedState;   
            }
        default:
            return state;
    }
};