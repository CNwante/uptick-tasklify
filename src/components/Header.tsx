import taskIcon from "../assets/task_icon.svg";

export const Header = () => {
  return (
    <header className="w-full px-2 py-4 bg-white">
      <div className="w-[80%] m-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={taskIcon} alt="Task icon image" className="w-12 h-10  "/>
          <h1 className="font-bold text-xl">Tasklify</h1>
        </div>
        <div className="flex items-center space-x-3 font-semibold">
          <span className="flex justify-center items-center w-12 h-12 bg-red-400 p-5 rounded-full text-white">
            C
          </span>
          <p>Chuks</p>
        </div>
      </div>
    </header>
  );
};
