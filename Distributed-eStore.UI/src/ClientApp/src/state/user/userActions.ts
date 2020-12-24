import { IAppThunkAction, ReduxAction } from "..";

interface TempAction {
    
}

export type KnownAction = TempAction;

export const userActionCreators = {
    register: (firstName: string, lastName: string, email: string, password: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        // template - TODO - implementation details once register form is complete.
        //return AuthService.register(firstName, lastName, email, password).then(
        //    (response) => {
        //        dispatch({
        //            type: REGISTER_SUCCESS,
        //        });

        //        dispatch({
        //            type: SET_MESSAGE,
        //            payload: response.data.message,
        //        });

        //        return Promise.resolve();
        //    },
        //    (error) => {
        //        const message =
        //            (error.response &&
        //                error.response.data &&
        //                error.response.data.message) ||
        //            error.message ||
        //            error.toString();

        //        dispatch({
        //            type: REGISTER_FAIL,
        //        });

        //        dispatch({
        //            type: SET_MESSAGE,
        //            payload: message,
        //        });

        //        return Promise.reject();
        //    }
        //);
    },
    login: (email: string, password: string): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        //return AuthService.login(username, password).then(
        //    (data) => {
        //        dispatch({
        //            type: LOGIN_SUCCESS,
        //            payload: { user: data },
        //        });

        //        return Promise.resolve();
        //    },
        //    (error) => {
        //        const message =
        //            (error.response &&
        //                error.response.data &&
        //                error.response.data.message) ||
        //            error.message ||
        //            error.toString();

        //        dispatch({
        //            type: LOGIN_FAIL,
        //        });

        //        dispatch({
        //            type: SET_MESSAGE,
        //            payload: message,
        //        });

        //        return Promise.reject();
        //    }
        //);
    },
    logout: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        // AuthService.logout();

        //dispatch({
        //    type: LOGOUT,
        //});
    }
};