import { ReduxAction } from '../';
import { IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
    allProducts: [],
    currentProducts: []
};

export const reducer = (state: IProductsListState = initialState, incomingAction: ReduxAction): IProductsListState => {
    const action = incomingAction as ReduxAction;
    switch (action.type) {
        case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
            const { products } = action;
            return {
                ...state,
                allProducts: products
            };
        default:
            return state;
  }
};