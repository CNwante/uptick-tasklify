export type TaskStatus = "todo" | "in progress" | "completed";
export type TaskPirority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
  dueDate?: string;
  status: TaskStatus;
  priority: TaskPirority;
}

export interface TaskState {
  tasks: Task[];
}
