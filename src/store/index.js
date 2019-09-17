import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import persistReducers from './persistReducers';

import rootReducer from './rootReducer';

const store = createStore(
  persistReducers(rootReducer),
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

export { store, persistor };
