import { configureStore } from "@reduxjs/toolkit";
import { taskReducder } from "../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks : taskReducder,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
