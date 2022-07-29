import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducers from '../reducer/rootReducers'

const applyMiddlewares = [thunk]

const store = configureStore({
   reducer : rootReducers,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false,
      applyMiddlewares,
      immutableCheck : false
   })
})

export default store;
