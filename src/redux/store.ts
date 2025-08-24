import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../features/tasks/tasksSlice";
import { taskFormReducer } from "../features/tasks/taskFormSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    taskForm: taskFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
