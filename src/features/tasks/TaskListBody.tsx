import { useAppSelector } from "../../redux/hooks";
import { TaskCard } from "./TaskCard";
import { selectTasksByStatus } from "./tasksSlice";
import type { TaskListBodyProps } from "./types";

export const TaskListBody: React.FC<TaskListBodyProps> = ({ status }) => {
  const tasks = useAppSelector((s) => selectTasksByStatus(s, status));

  return (
    <div className="p-6 space-y-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          createdAt={task.createdAt}
          dueDate={task.dueDate}
          status={task.status}
          priority={task.priority}
        />
      ))}
    </div>
  );
};
