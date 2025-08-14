import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  TaskStatus,
  TaskPriority,
  Task,
  TaskState,
} from "../../types/common";

const initialState: TaskState = {
  items: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Omit<Task, "id">>) {
      const payload = action.payload;
      const newTask: Task = { id: crypto.randomUUID(), ...payload };
      state.items.unshift(newTask);
    },

    updateTask: (
      state,
      action: PayloadAction<{
        id: string;
        title?: string;
        description?: string;
        dueDate?: string;
        priority?: TaskPriority;
      }>
    ) => {
      const task = state.items.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title ?? task.title;
        task.description = action.payload.description ?? task.description;
        task.dueDate = action.payload.dueDate ?? task.dueDate;
        task.priority = action.payload.priority ?? task.priority;
        task.updatedAt = new Date().toISOString();
      }
    },

    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) => {
      const task = state.items.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        task.updatedAt = new Date().toISOString();
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, updateStatus, deleteTask } =
  tasksSlice.actions;

export const taskReducer = tasksSlice.reducer;


