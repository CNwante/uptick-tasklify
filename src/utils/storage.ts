
export const saveTasks = (tasks: unknown) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.log("Unable to save task", error);
  }
}

export const loadTasks = () => {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Unable to fetch data from localStorage: ", error);
    return [];
  }
}
