import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TodoList />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
