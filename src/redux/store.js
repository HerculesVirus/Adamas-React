import { createStore } from 'redux';
import LoginReducer from "./login/loginReducer";



import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
}
// const rootReducer = combineReducers({ })
const persistedReducer = persistReducer(persistConfig, LoginReducer)
 

  let store = createStore(persistedReducer)
  export let persistor = persistStore(store)
  // exports= persistor 



// const peristedState = loadState();
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = [ composeWithDevTools(applyMiddleware(logger,thunk))]


// const store = createStore(rootReducer,compose(...enhancer) )


export default store;