import { CartActionTypes, ICartListState } from "./cartTypes";
import { ReduxAction } from '../index';

const initialState: ICartListState = {
    cartProductIDs: []
};

export const reducer = (state: ICartListState = initialState, incomingAction: ReduxAction): ICartListState => {
    const action = incomingAction as ReduxAction;
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
        case CartActionTypes.REMOVE_FROM_CART:
        case CartActionTypes.INCREMENT_PRODUCT_QUANTITY:
        case CartActionTypes.DECREMENT_PRODUCT_QUANTITY:
        case CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};