import { applyMiddleware, createStore , combineReducers} from 'redux';
import LoginReducer from "./Auth/loginReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CollectionReducer from './Home/Collection/CollectionReducer';


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ auth : LoginReducer , collection : CollectionReducer})
const persistedReducer = persistReducer( persistConfig , rootReducer)
 

  let store = createStore(persistedReducer, applyMiddleware(logger,thunk))
  export let persistor = persistStore(store)
  // exports= persistor 



// const peristedState = loadState();
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = [ composeWithDevTools(applyMiddleware(logger,thunk))]


// const store = createStore(rootReducer,compose(...enhancer) )


export default store;