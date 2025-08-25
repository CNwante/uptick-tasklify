import type { Task, TaskStatus, TaskPriority } from "../../types/common";

export interface TaskCardProps extends Task {

}

export interface TaskListHeaderProps {
  title: TaskStatus;
  variant: "titleOnly" | "titleWithAdd";
}

export interface TaskListProps {
  status: TaskStatus;
  variant: "titleWithAdd" | "titleOnly";
}

export interface FormState {
  formVisibility: Record<TaskStatus, boolean>;
  editingTask: Task | null;
}

export interface TaskListBodyProps {
  status: TaskStatus;
  hiddenTaskId?: string;
}

export type PriorityFilter = TaskPriority | "all";

export interface TaskStatusColumn {
  priority: PriorityFilter;
}

export interface TaskfilterState {
  byStatus: Record<TaskStatus, TaskStatusColumn>;
}
