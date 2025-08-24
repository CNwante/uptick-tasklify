import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskStatus } from "../../types/common";
import type { FormState } from "./types";
import type { RootState } from "../../redux/store";

const initialState: FormState = {
  formVisibility: {
    todo: false,
    "in progress": false,
    completed: false,
  },
  editingTask: null,
};

const taskFormSlice = createSlice({
  name: "taskForm",
  initialState,
  reducers: {
    openTaskForm(state, action: PayloadAction<TaskStatus>) {
      state.formVisibility[action.payload] = true;
      state.editingTask = null;
    },
    closeTaskForm(state, action: PayloadAction<TaskStatus>) {
      state.formVisibility[action.payload] = false;
      state.editingTask = null;
    },
    openEditTaskForm(state, action: PayloadAction<Task>) {
      state.formVisibility[action.payload.status] = true;
      state.editingTask = action.payload;
    }
  },
});

export const { openTaskForm, closeTaskForm, openEditTaskForm } = taskFormSlice.actions;
export const taskFormReducer = taskFormSlice.reducer;

export const selectIsTaskFormVisibile = (
  state: RootState,
  status: TaskStatus
) => state.taskForm.formVisibility[status];
