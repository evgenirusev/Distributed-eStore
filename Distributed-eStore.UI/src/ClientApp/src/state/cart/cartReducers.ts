import { CartActionTypes, ICartState } from "./cartTypes";
import { ReduxAction } from '../index';

const initialState: ICartState = {
    productIdToCartProductMap: {}
};

export const reducer = (state: ICartState = initialState, incomingAction: ReduxAction): ICartState => {
    const action = incomingAction as ReduxAction;
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            {
                const { cartProduct } = action;

                const productId = cartProduct.id;
                if (!state.productIdToCartProductMap[productId]) {
                    return {
                        productIdToCartProductMap: {
                            ...state.productIdToCartProductMap,
                            [productId]: {
                                ...cartProduct
                            }
                        }
                    }
                }
            }
        case CartActionTypes.REMOVE_FROM_CART:
            {
                const { productId } = action;

                Object.assign({}, state, {
                    productIdToCartProductMap: Object.keys(state.productIdToCartProductMap).reduce((result, key) => {
                        if (key !== productId) {
                            result[key] = state.productIdToCartProductMap[key];
                        }

                        return result;
                    }, {})
                });
            }
        case CartActionTypes.CHANGE_QUANTITY:
            {
                const { productId, quantity } = action;
                const product = state.productIdToCartProductMap[productId];

                if (product && quantity >= 0) {
                    return {
                        productIdToCartProductMap: {
                            ...state.productIdToCartProductMap,
                            [productId]: {
                                ...state.productIdToCartProductMap[productId],
                                quantity
                            }
                        }
                    }
                }
            }
        case CartActionTypes.PLACE_ORDER:
        default:
            return state;
    }
};