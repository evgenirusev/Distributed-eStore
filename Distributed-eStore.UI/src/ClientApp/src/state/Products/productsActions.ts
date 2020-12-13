import { SampleApi } from '../../api';
import { IAppThunkAction, ReduxAction } from '..';
import { ProductListActionTypes } from './productLIstTypes';

export const actions = {
    requestAllProducts: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        // Dispatch request
        dispatch({
            startDateIndex,
            type: WeatherActionType.REQUEST
        });

        // USING THIS AS A TEMPLATE FOR NOW, WILL REFACTOR SHORTLY AFTER
        // Build http request and success handler in Promise<void> wrapper
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