import { applyMiddleware, createStore , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //REDUX dev-tools
import LoginReducer from "./Auth/loginReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CollectionReducer from './Home/Category/CollectionReducer';
import ProductReducer from './Home/Product/ProductReducer';
import ShopReducer from './Home/Shop/ShopReducers';
import ProductPreviewReducer from './Home/ProductPreview/ProductPreviewReducers';
import CartReducer from './Home/cart/cartReducer';


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  auth : LoginReducer , 
  collection : CollectionReducer ,
  product : ProductReducer , 
  shop : ShopReducer , 
  productPreview : ProductPreviewReducer , 
  cart : CartReducer
})
const persistedReducer = persistReducer( persistConfig , rootReducer)
 

let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger,thunk)))
export let persistor = persistStore(store)
// exports= persistor 

  export default store;