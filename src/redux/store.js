import { tweetReducer } from './tweet/tweetSlice';
import { followSlice } from './follow/followSlice';
import { configureStore } from '@reduxjs/toolkit';
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
    tweets: tweetReducer,
    follow: persistedFollowReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      devTools: process.env.NODE_ENV !== 'production',
    }),
});

export const persistor = persistStore(store);
