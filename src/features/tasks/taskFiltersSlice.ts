import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PriorityFilter, TaskfilterState } from "./types";
import type { TaskStatus } from "../../types/common";
import type { RootState } from "../../redux/store";
import { selectVisibleTasks } from "./tasksSlice";

const initialState: TaskfilterState = {
  byStatus: {
    todo: { priority: "all" },
    "in progress": { priority: "all" },
    completed: { priority: "all" },
  },
};

const taskFiltersSlice = createSlice({
  name: "taskFilters",
  initialState,
  reducers: {
    setPriorityFilter(
      state,
      action: PayloadAction<{ status: TaskStatus; priority: PriorityFilter }>
    ) {
      state.byStatus[action.payload.status].priority = action.payload.priority;
    },
  },
});

export const { setPriorityFilter } = taskFiltersSlice.actions;
export const taskFiltersReducer = taskFiltersSlice.reducer;

export const selectPriorityFilterByStatus = (
  state: RootState,
  status: TaskStatus
) => state.taskFilters.byStatus[status].priority;

export const selectFilteredCountByStatus = (state: RootState, status: TaskStatus) => selectVisibleTasks(state, status).length;
