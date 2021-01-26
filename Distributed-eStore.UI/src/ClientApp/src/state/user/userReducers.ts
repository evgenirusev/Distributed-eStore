import { IUser, IUserState } from "./userTypes";
import { ReduxAction } from '../';
import { UserActionTypes } from "./userTypes";

const userKey = "user";
const userData: string | null = localStorage.getItem(userKey);
const initialState: IUserState = userData
    ? { isLoggedIn: true, user: JSON.parse(userData), shouldRedirect: true }
    : { isLoggedIn: false, user: {} as IUser, shouldRedirect: false };

export const reducer = (state: IUserState = initialState, incomingAction: ReduxAction): IUserState => {
    const { type, payload } = incomingAction as ReduxAction;

    switch (type) {
        case UserActionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case UserActionTypes.REGISTRATION_FAILED:
            return {
                ...state,
                isLoggedIn: false
            };
        case UserActionTypes.LOGIN_SUCCESS:
            const { user } = payload;

            return {
                ...state,
                isLoggedIn: true,
                user
            };
        case UserActionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}