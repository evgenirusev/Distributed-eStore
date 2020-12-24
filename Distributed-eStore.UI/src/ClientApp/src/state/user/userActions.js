"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userActionCreators = void 0;
exports.userActionCreators = {
    register: function (firstName, lastName, email, password) { return function (dispatch, getState) {
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
    }; },
    login: function (email, password) { return function (dispatch, getState) {
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
    }; },
    logout: function () { return function (dispatch, getState) {
        // AuthService.logout();
        //dispatch({
        //    type: LOGOUT,
        //});
    }; }
};
//# sourceMappingURL=userActions.js.map