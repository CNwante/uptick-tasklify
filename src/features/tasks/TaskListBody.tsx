import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TaskCard } from "./TaskCard";
import { TaskForm } from "./TaskForm";
import { selectTasksByStatus, updateTask, addTask } from "./tasksSlice";
import { closeTaskForm } from "./taskFormSlice";
import type { TaskListBodyProps } from "./types";

export const TaskListBody: React.FC<TaskListBodyProps> = ({ status }) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((s) => selectTasksByStatus(s, status));
  const editingTask = useAppSelector((s) => s.taskForm.editingTask);
  const isOpen = useAppSelector((s) => s.taskForm.formVisibility[status]);

  const handleSave = (data: any) => {
    if (editingTask) {
      dispatch(updateTask({ id: editingTask.id, ...data }));
    } else {
      dispatch(addTask({ ...data, status }));
    }
    dispatch(closeTaskForm(status));
  };

  const handleCancel = () => {
    dispatch(closeTaskForm(status));
  };

  return (
    <div className="p-6 space-y-6">
      {isOpen && !editingTask && (
        <TaskForm
          onSave={handleSave}
          onCancel={handleCancel}
          initialValues={{
            title: "",
            description: "",
            priority: "low",
            createdAt: new Date().toISOString().split("T")[0],
            dueDate: "",
          }}
        />
      )}

      {tasks.map((task) =>
        editingTask && editingTask.id === task.id ? (
          <TaskForm
            key={task.id}
            onSave={handleSave}
            onCancel={handleCancel}
            initialValues={editingTask}
          />
        ) : (
          <TaskCard key={task.id} {...task} />
        )
      )}
    </div>
  );
};
