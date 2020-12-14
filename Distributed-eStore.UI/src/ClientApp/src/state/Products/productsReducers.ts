import { ReduxAction } from '../';
import { IProductsState, ProductsActionTypes } from './productsTypes';

const initialState: IProductsState = {
  products: []
};

export const reducer = (
  state: IProductsState = initialState,
  incomingAction: ReduxAction
): IProductsState => {
  const action = incomingAction as ReduxAction;

  switch (action.type) {
    // note - check this
    case ProductsActionTypes.REQUEST_ALL_ARRIVAL:
      return state;
    default:
      return state;
  }
};