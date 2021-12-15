import {createStore, compose, applyMiddleware} from 'redux';
import LoginReducer from "./login/loginReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };
  
  const peristedState = loadState();
  

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = [peristedState,composeWithDevTools(applyMiddleware(logger,thunk))]


const store = createStore(LoginReducer,compose(...enhancer) )
store.subscribe(() => {
    saveState(store.getState());
});

export default store;