import { IProductsListState } from "./products/productsTypes";
import { reducer } from "./products/productsReducers";
import * as Cart from './cart/';
import * as User from './user/';

export interface IApplicationState {
    readonly products: IProductsListState;
    readonly cart: Cart.ICartState;
    readonly user: User.IUserState;
}

export const reducers = {
    products: reducer,
    user: User.reducer,
    cart: Cart.reducer
};

export interface IAppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}

export type ReduxAction = { type: string; } & { [key: string]: any; };