export type TaskStatus = "todo" | "in progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
  dueDate?: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export interface TaskState {
  items: Task[];
}
