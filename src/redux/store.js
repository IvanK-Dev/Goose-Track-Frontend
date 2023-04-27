
import { configureStore } from '@reduxjs/toolkit';
import { authInitState } from './auth/auth.init-state';
import { authReducer } from './auth/authSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { userReducer } from "./user/userSlice";

const initState = {
  auth: authInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);




export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

