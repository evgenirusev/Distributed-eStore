import { IAppThunkAction, ReduxAction } from "..";
import { register, login} from "../../services/auth";

interface TempAction {
    
}

export type KnownAction = TempAction;

export type UserRegistrationData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export const userActionCreators = {
    register: (userData: UserRegistrationData): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        const { firstName, lastName, email, password } = userData;
        return register(firstName, lastName, email, password).then(
            (response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });

                return Promise.resolve();
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
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