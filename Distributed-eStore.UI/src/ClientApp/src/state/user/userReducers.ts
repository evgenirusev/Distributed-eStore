import { IUser, IUserState } from "./userTypes";
import { ReduxAction } from '../index';
import { UserActionTypes } from "./";

const userData: string | null = localStorage.getItem("user");
const initialState: IUserState = userData
    ? { isLoggedIn: true, user: JSON.parse(userData) }
    : { isLoggedIn: false, user: {} as IUser };

export default function (state = initialState, incomingAction: ReduxAction): IUserState {
    const { type, payload } = incomingAction as ReduxAction;

    switch (type) {
        case UserActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case UserActionTypes.REGISTER_FAIL:
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
