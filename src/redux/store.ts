import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../features/tasks/tasksSlice";
import { taskFormReducer } from "../features/tasks/taskFormSlice";
import { loadTasks, saveTasks } from "../utils/storage";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    taskForm: taskFormReducer,
  },
  preloadedState: {
    tasks: {
      items: loadTasks(),
    }
  }
});

store.subscribe(() => {
  const state = store.getState();
  saveTasks(state.tasks.items);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
