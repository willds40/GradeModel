import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import Summary from './components/summary'
import HomePage from "./components/homepage";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
          <Switch>>
              <Route path = "/summary" component = {Summary} />
              <Route path = "/" component = {HomePage} />

          </Switch>
      </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
