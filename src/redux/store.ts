import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authSlice from './auth/authSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Konfigurasi persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authSlice,
});

// Bungkus rootReducer dengan persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Buat store menggunakan persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Buat persistor untuk mengontrol persistensi
export const persistor = persistStore(store);

// Tipe RootState dan AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
