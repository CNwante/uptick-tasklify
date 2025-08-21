import { Header } from "../components/Header";
import { TaskList } from "../features/tasks/TaskList";

export const DashboardPage = () => {
  return (
    <div className="bg-[#cad4f5] min-h-screen">
      <Header />
      <div className="w-[90%] sm:w-[80%] mx-auto my-12 space-y-8 [@media(min-width:1100px)]:space-y-0 [@media(min-width:1100px)]:flex justify-center items-center gap-6">
        <TaskList status="todo" variant="titleWithAdd" />
        <TaskList status="in progress" variant="titleOnly" />
        <TaskList status="completed" variant="titleOnly" />
      </div>
    </div>
  );
};
