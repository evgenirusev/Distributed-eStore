import * as Products from './products/';
import * as Cart from './cart/';
import * as User from './user/';

export interface IApplicationState {
    readonly products: Products.IProductsListState;
    readonly cart: Cart.ICartState;
    readonly user: User.IUserState;
}

export const reducers = {
    products: Products.reducer,
    user: User.reducer,
    cart: Cart.reducer
};

export interface IAppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}

export type ReduxAction = { type: string; } & { [key: string]: any; };