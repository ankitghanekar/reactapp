import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import MainContent from './components/MainContent'
import About from './containers/about/'
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/index'
import { Provider } from 'react-redux'
const middleware = [thunk];


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(productsReducer,enhancer)
// ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
  <App>
      <Switch>
        <Route path="/About" exact component={About} />
        <Route path="/youtube" component={MainContent} />
      </Switch>
    </App>
    </BrowserRouter>

      </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
