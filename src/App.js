import React from 'react';
import AppRoutes from './routes/routes';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./App.css"

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="content">
          <AppRoutes />
        </div>
      </div>
    </Provider>
  );
}

export default App;