import { LuSave, LuX } from "react-icons/lu";
import type { TaskPriority, TaskStatus } from "../../types/common";
import clsx from "clsx";
import { useState } from "react";

interface AddTaskFormProps {
  initialValues?: {
    id?: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: string;
    dueDate: string;
  };
  onSave: (data: any) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<AddTaskFormProps> = ({
  initialValues = {
    title: "",
    description: "",
    status: "todo",
    priority: "low",
    createdAt: "",
    dueDate: "",
  },
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState(() => ({ ...initialValues }));

  const priorityColors: Record<TaskPriority, { text: string; bg: string }> = {
    low: { text: "text-gray-700", bg: "bg-gray-300" },
    medium: { text: "text-yellow-700", bg: "bg-yellow-200" },
    high: { text: "text-red-700", bg: "bg-red-200" },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-6 space-y-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-start bg-white rounded-md shadow-md w-full transition-colors duration-200 mx-auto"
      >
        <div className="border-[#9aaded] flex-1 space-y-3 p-3 relative">

          {/* Top Row */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-300">
            <div className="flex flex-wrap gap-3">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="bg-gray-200 rounded-md text-sm px-2 py-0.5 focus:outline-none cursor-pointer"
              >
                <option value="todo">todo</option>
                <option value="in progress">in progress</option>
                <option value="completed">completed</option>
              </select>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className={clsx(
                  priorityColors[formData.priority].text,
                  priorityColors[formData.priority].bg,
                  "rounded-md text-sm px-2 py-0.5 font-medium focus:outline-none cursor-pointer"
                )}
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>

            {/* Save & Cancel Buttons */}
            <div className="flex items-center gap-2 text-[#4A6FF4]">
              <button
                type="submit"
                aria-label="Save"
                className="p-1 cursor-pointer"
              >
                <LuSave size={18} />
              </button>
              <button
                type="button"
                aria-label="Cancel"
                onClick={onCancel}
                className="p-1 cursor-pointer"
              >
                <LuX size={18} />
              </button>
            </div>
          </div>

          {/* Title Input */}
          <div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task title"
              className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-800 focus:outline-none"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task description"
              className="w-full border border-gray-300 rounded-md px-2 py-1 mt-2 text-sm text-gray-700 focus:outline-none"
            />
          </div>

          {/* Dates */}
          <div className="flex justify-between flex-wrap gap-4 text-sm text-gray-500">
            <div>
              <label className="block text-gray-600 text-xs">Starts</label>
              <input
                type="date"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-xs">Ends</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
