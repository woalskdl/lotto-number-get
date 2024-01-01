import { combineReducers } from "redux";
import { lottoNumberReducers } from "../reducers/lottoNumbers";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    numbers:lottoNumberReducers
})

const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);