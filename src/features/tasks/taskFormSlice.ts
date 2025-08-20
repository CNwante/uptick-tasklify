import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskStatus } from "../../types/common";
import type { FormState } from "./types";
import type { RootState } from "../../redux/store";

const initialState: FormState = {
  formVisibility: {
    todo: false,
    "in progress": false,
    completed: false,
  },
};

const taskFormSlice = createSlice({
  name: "taskForm",
  initialState,
  reducers: {
    openTaskForm(state, action: PayloadAction<TaskStatus>) {
      state.formVisibility[action.payload] = true;
    },
    closeTaskForm(state, action: PayloadAction<TaskStatus>) {
      state.formVisibility[action.payload] = false;
    },
  },
});

export const { openTaskForm, closeTaskForm } = taskFormSlice.actions;
export const taskFormReducer = taskFormSlice.reducer;

export const selectIsTaskFormVisibile = (
  state: RootState,
  status: TaskStatus
) => state.taskForm.formVisibility[status];
