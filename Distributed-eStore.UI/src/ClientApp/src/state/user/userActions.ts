import { IUser, UserActionTypes } from ".";
import { IAppThunkAction, ReduxAction } from "..";
import { register, login, logout } from "../../services/auth";

export type UserRegistrationData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    // technical debt
    role: string
}

const userKey = "user";

/* eslint-disable */
export const userActionCreators = {
    register: (userData: UserRegistrationData): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        try {
            const { firstName, lastName, email, password, role } = userData;
            await register(firstName, lastName, email, password, role);

            dispatch({
                type: UserActionTypes.REGISTRATION_SUCCESS,
            });

            await userActionCreators.login(email, password)(dispatch, getState);
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            dispatch({
                type: UserActionTypes.REGISTRATION_FAILED,
            });

            // technical debt
            alert(`Registration failed - ${message}`);
        }
    },
    login: (email: string, password: string): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        try {
            const user: IUser = (await login(email, password)).data;

            localStorage.setItem(userKey, JSON.stringify(user));
            dispatch({
                type: UserActionTypes.LOGIN_SUCCESS,
                payload: { user }
            });
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            dispatch({
                type: UserActionTypes.LOGIN_FAIL
            });

            // technical debt
            alert(`Login failed - ${message}`);
        }
    },
    logout: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
        logout();

        dispatch({
            type: UserActionTypes.LOGOUT,
        });
    }
};