// folderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: {},
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setFolders(state, action) {
      state.folders = action.payload;
    },
    clearFolders(state) {
      state.folders = {};
    },
  },
});

export const { setFolders, clearFolders } = folderSlice.actions;
export default folderSlice.reducer;
