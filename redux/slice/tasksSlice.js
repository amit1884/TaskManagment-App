// folderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    clearTasks(state) {
      state.tasks = {};
    },
  },
});

export const { setTasks, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
