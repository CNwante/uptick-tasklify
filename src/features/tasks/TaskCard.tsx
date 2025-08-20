import { LuPencilLine, LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import type { TaskPriority, TaskStatus } from "../../types/common";
import type { TaskCardProps } from "./types";
import clsx from "clsx";
import { updateStatus, updateTask } from "./tasksSlice";
import { useAppDispatch } from "../../redux/hooks";
import { openEditTaskForm } from "./taskFormSlice";

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  createdAt,
  dueDate,
  status,
  priority,
}) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openEditTaskForm({ id, title, description, createdAt, dueDate, status, priority }));
  };

  const priorityColors: Record<TaskPriority, { text: string; bg: string }> = {
    low: {
      text: "text-gray-700",
      bg: "bg-gray-300",
    },
    medium: {
      text: "text-yellow-700",
      bg: "bg-yellow-200",
    },
    high: {
      text: "text-red-700",
      bg: "bg-red-200",
    },
  };

  return (
    <div className="flex items-start bg-white rounded-md shadow-md w-full transition-colors duration-200 mx-auto ">
      <div className="border-[#9aaded] flex-1 space-y-3 p-3 border-l-[32px] rounded-md relative">
        <MdDragIndicator className="absolute -left-8 top-1/2 -translate-y-1/2 text-3xl cursor-grab" />
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-300">
          <div className="flex flex-wrap gap-3">
            <select
              value={status}
              onChange={(e) => {
                dispatch(updateStatus({ id, status: e.target.value as TaskStatus }));
              }}
              className="bg-gray-200 rounded-md text-sm px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-[#4A6FF4] cursor-pointer"
            >
              <option value="todo">todo</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>

            <select
              value={priority}
              onChange={(e) => {
                dispatch(updateTask({ id, priority: e.target.value as TaskPriority }));
              }}
              className={clsx(
                priorityColors[priority].text,
                priorityColors[priority].bg,
                "rounded-md text-sm px-2 py-0.5 font-medium focus:ring-2 focus:ring-[#4A6FF4] cursor-pointer"
              )}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-[#4A6FF4]">
            <button
              type="button"
              aria-label="Edit"
              className="p-1 cursor-pointer"
              onClick={handleEdit}
            >
              <LuPencilLine size={18} />
            </button>

            <button
              type="button"
              aria-label="Delete"
              className="p-1 cursor-pointer"
            >
              <LuTrash2
                size={18}
                className=" text-[#4A6FF4] hover:text-red-500"
              />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-gray-800 font-medium">{title}</h3>
          <p className="text-sm text-gray-700 leading-snug py-1 max-h-20 overflow-y-auto">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-gray-400">📅</span> Starts: {createdAt}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">⏳</span> Ends: {dueDate}
          </div>
        </div>
      </div>
    </div>
  );
};
