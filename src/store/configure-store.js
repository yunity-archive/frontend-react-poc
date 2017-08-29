import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

export default (initialState) => {
  const store = createStore(
    rootReducer, 
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    initialState
  );

  // configure hot module replacement (HMR)
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer);
      })
    }
  }

  return store;
};