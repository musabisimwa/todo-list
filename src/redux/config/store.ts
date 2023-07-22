
import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from '../reducers/reducer';
import thunk from 'redux-thunk';
const store = configureStore({
reducer:reducers,
middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
 
});
export default store;

