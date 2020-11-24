import storage from 'redux-persist/lib/storage'; // Para salvar no storage do navegador
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'DANI_STORE',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
