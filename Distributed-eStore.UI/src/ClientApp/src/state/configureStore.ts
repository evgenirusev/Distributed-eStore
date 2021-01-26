import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { IApplicationState, reducers } from './';
import { saveCartToLocalStorage, loadCartState } from './localStorage/localStorageHelpers';

export default function configureStore(history: History, initialState?: IApplicationState) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const cartState = loadCartState();

    // technical debt   
    let state: any;
    if (cartState) {
        state = {
            ...initialState,
            cart: cartState
        }
    }

    const store = createStore(
        rootReducer,
        state,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
    
    store.subscribe(() => saveCartToLocalStorage(store.getState().cart));

    return store;
}