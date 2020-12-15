import * as Products from './products/'

export interface IApplicationState {
    readonly products: Products.IProductsListState | undefined;
}

export const reducers = {
    products: Products.reducer,
};

export interface IAppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}

export type ReduxAction = { type: string; } & { [key: string]: any; };