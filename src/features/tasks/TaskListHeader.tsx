import { LuPlus } from "react-icons/lu";
import type { TaskListHeaderProps, PriorityFilter } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import type { TaskStatus } from "../../types/common";
import { selectTasksCountByStatus } from "./tasksSlice";
import { openTaskForm } from "./taskFormSlice";
import {
  selectFilteredCountByStatus,
  selectPriorityFilterByStatus,
  setPriorityFilter,
} from "./taskFiltersSlice";

export const TaskListHeader: React.FC<TaskListHeaderProps> = ({
  title,
  variant,
}) => {
  const dispatch = useAppDispatch();
  const status = title as TaskStatus;

  const filteredCount = useAppSelector((s) =>
    selectFilteredCountByStatus(s, status)
  );
  const totalCount = useAppSelector((s) => selectTasksCountByStatus(s, status));
  const priority = useAppSelector((s) =>
    selectPriorityFilterByStatus(s, status)
  );

  return (
    <div className="flex justify-between items-center p-4 border-b border-white sticky left-0 top-0 z-10 bg-white/20 backdrop-blur-2xl font-bold">
      <h2 className="capitalize">
        {title}{" "}
        <span className="bg-[#9aaded] text-white w-5 h-5 inline-flex justify-center items-center p-[13px] rounded-full">
          {filteredCount}/{totalCount}
        </span>
      </h2>

      <div className="flex items-center gap-2">
        <select
          value={priority}
          onChange={(e) =>
            dispatch(
              setPriorityFilter({
                status,
                priority: e.target.value as PriorityFilter,
              })
            )
          }
          className="bg-white/70 rounded-md text-sm px-2 py-1"
          aria-label={`Filter ${status} by priority`}
        >
          <option value="all">all</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>

        {variant === "titleWithAdd" && (
          <button
            type="button"
            aria-label={`Add ${title} task`}
            className="p-1  rounded-full hover:rounded-md cursor-pointer bg-[#9aaded] hover:bg-white"
            onClick={() => dispatch(openTaskForm(status))}
          >
            <LuPlus />
          </button>
        )}
      </div>
    </div>
  );
};
