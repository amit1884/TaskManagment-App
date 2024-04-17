// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import folderSlice from "./slice/folderSlice";
import tasksSlice from "./slice/tasksSlice";
// Import other reducers here

const rootReducer = combineReducers({
  auth: authReducer,
  folder: folderSlice,
  task: tasksSlice,
  // Other reducers go here
});

export default rootReducer;
