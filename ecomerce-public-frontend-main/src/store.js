import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authRegisterReducer, authLoginReducer } from './redux/reducers/authReducer';


const persistCommonConfig = {
    storage: storage
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
};


const reducer = combineReducers({
    authRegister: authRegisterReducer,
    authLogin: persistReducer(userPersistConfig, authLoginReducer)
});



let initialState = {
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store);

export default store;