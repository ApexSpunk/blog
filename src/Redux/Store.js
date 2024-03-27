import { thunk } from 'redux-thunk';
import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import blogReducer from './posts/reducer';


const rootReducer = combineReducers({
    blog: blogReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);