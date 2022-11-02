import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

/*Выносим reducer чтобы в итоге получить массив, а не обьект */

const reducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});

export const persistedContactsReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedContactsReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
