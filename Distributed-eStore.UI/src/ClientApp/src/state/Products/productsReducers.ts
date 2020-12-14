import { ReduxAction } from '../';
import { IProductsListState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsListState = {
  products: []
};

export const reducer = (
  state: IProductsListState = initialState,
  incomingAction: ReduxAction
): IProductsListState => {
  const action = incomingAction as ReduxAction;

  switch (action.type) {
    // note - check this
    case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
      return state;
    default:
      return state;
  }
};