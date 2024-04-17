// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import folderSlice from './slice/folderSlice';
// Import other reducers here

const rootReducer = combineReducers({
  auth: authReducer,
  folder:folderSlice
  // Other reducers go here
});

export default rootReducer;
