import { IAppThunkAction, ReduxAction } from '../';

export const actionCreators = {
    requestProducts: (): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        if (getState()) {
            try {
                const products: IProduct[] = (await getAllPosts()).data;
                products.forEach(p => p.selectedColorIndex = defaultColorIndex);

                dispatch({
                    products,
                    type: ProductsActionTypes.REQUEST_ALL_ARRIVAL
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
};