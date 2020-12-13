import { getAllPosts } from '../../api';
import { IAppThunkAction, ReduxAction } from '..';
import { ProductListActionTypes } from './productLIstTypes';

export const actions = {
    requestAllProducts: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        // Dispatch request
        dispatch({
            startDateIndex,
            type: WeatherActionType.REQUEST
        });

        SampleApi.getWeatherForecastsAsync(startDateIndex)
            .then((forecasts: IWeatherForecast[]) => {
                dispatch({
                    forecasts,
                    startDateIndex,
                    type: WeatherActionType.RECEIVE
                });
            });
    },
};