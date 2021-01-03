import { IUser, IUserState } from "./userTypes";
import { ReduxAction } from '../';
import { UserActionTypes } from "./userTypes";

const userData: string | null = localStorage.getItem("user");
const initialState: IUserState = userData
    ? { isLoggedIn: true, user: JSON.parse(userData) }
    : { isLoggedIn: false, user: {} as IUser };

export const reducer = (state = initialState, incomingAction: ReduxAction): IUserState => {
    const { type, payload } = incomingAction as ReduxAction;

    switch (type) {
        case UserActionTypes.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case UserActionTypes.REGISTRATION_FAILED:
            return {
                ...state,
                isLoggedIn: false,
            };
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
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
