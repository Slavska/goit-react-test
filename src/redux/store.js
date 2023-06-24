import { userReducer } from './user/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { followSlice } from './follow/followSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedFollowReducer = persistReducer(
  persistConfig,
  followSlice.reducer
);

export const store = configureStore({
  reducer: {
    user: userReducer,
    follow: persistedFollowReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
