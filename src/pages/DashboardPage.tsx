import { Header } from "../components/Header";
import { TaskList } from "../features/tasks/TaskList";
import { TaskListBody } from "../features/tasks/TaskListBody";
import { TaskListHeader } from "../features/tasks/TaskListHeader";
import type { TaskStatus } from "../types/common";

export const DashboardPage = () => {
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
  return (
    <TaskList>
      <TaskListHeader title={status} variant={variant} />
      <TaskListBody status={status} />
    </TaskList>
  );
};
