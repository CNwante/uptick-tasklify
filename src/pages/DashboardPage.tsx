import { Header } from "../components/Header";
import { TaskForm } from "../features/tasks/TaskForm";
import {
  closeTaskForm,
  selectIsTaskFormVisibile,
} from "../features/tasks/taskFormSlice";
import { TaskList } from "../features/tasks/TaskList";
import { TaskListBody } from "../features/tasks/TaskListBody";
import { TaskListHeader } from "../features/tasks/TaskListHeader";
import { addTask } from "../features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type { TaskStatus } from "../types/common";

export const DashboardPage = () => {
  // const statuses: TaskStatus[] = ["todo", "in progress", "completed"];

  return (
    <div className="bg-[#cad4f5] min-h-screen">
      <Header />
      <div className="w-[90%] sm:w-[80%] mx-auto my-12 space-y-8 [@media(min-width:1100px)]:space-y-0 [@media(min-width:1100px)]:flex justify-center items-center gap-6">
        <Column status="todo" variant="titleWithAdd" />
        <Column status="in progress" variant="titleOnly" />
        <Column status="completed" variant="titleOnly" />
      </div>
    </div>
  );
};

const Column: React.FC<{
  status: TaskStatus;
  variant: "titleWithAdd" | "titleOnly";
}> = ({ status, variant }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => selectIsTaskFormVisibile(s, status));

  const handleSave = (data: any) => {
    const payload = { ...data, status };
    dispatch(addTask(payload));
    dispatch(closeTaskForm(status));
  };

  const handleCancel = () => {
    dispatch(closeTaskForm(status));
  };

  return (
    <TaskList key={status}>
      <TaskListHeader title={status} variant={variant} />
      {isOpen && (
        <TaskForm
          onSave={handleSave}
          onCancel={handleCancel}
          initialValues={{
            title: "",
            description: "",
            status: "todo",
            priority: "low",
            createdAt: new Date().toISOString(),
            dueDate: "",
          }}
        />
      )}
      <TaskListBody status={status} />
    </TaskList>
  );
};
