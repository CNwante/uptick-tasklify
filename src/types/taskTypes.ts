export type TaskStatus = "todo" | "in progress" | "completed";
export type Pirority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
  dueDate?: string;
  status: TaskStatus;
  priority: Pirority | null;
}

export interface TaskState {
  tasks: Task[];
}
