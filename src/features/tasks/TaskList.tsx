import type { TaskListProps } from "./types"


export const TaskList: React.FC<TaskListProps> = ({children}) => {
  return (
    <section className="bg-white/20 rounded-[8px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border-2 border-white min-h-[300px] max-h-[700px] overflow-auto relative">
      <div>
        {children}
      </div>
    </section>
  )
}
