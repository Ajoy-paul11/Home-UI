import React, { useState } from "react";

function Task() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;
    setTasks([...tasks, { id: Date.now(), todo, toggleComplete: false }]);
    setTodo("");
  };

  const toggleChange = (e) => {
    const id = e.target.id;
    const index = tasks.findIndex((task) => task.id === parseInt(id));
    if (index !== -1) {
      setTasks([
        { ...tasks[index], toggleComplete: !tasks[index].toggleComplete },
      ]);
    }
  };

  const removeTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className=" bg-neutral-800 text-gray-200 h-screen">
      <div className="  py-6 text-center font-bold text-2xl lg:text-4xl ">
        <h2>List your daily Todo</h2>
      </div>
      <form onSubmit={handleTodo}>
        <div className=" w-full flex justify-center">
          <div className="w-[90%] lg:w-[60%] flex items-center">
            <input
              type="text"
              className="bg-gray-50 text-gray-300 text-xl rounded-l-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 border-none duration-300"
              placeholder="Add your Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="text-gray-700 text-lg lg:text-xl bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-r-lg  px-5 py-2.5   duration-300"
            >
              Todo
            </button>
          </div>
        </div>
      </form>
      <div className=" m-4 p-4">
        {tasks.map((task) => (
          <div key={task.id} className=" w-[90%] lg:w-[50%] mx-auto">
            <div
              className={`  w-full bg-slate-600 flex justify-center outline-none duration-300 py-4 px-4 mb-3 rounded-lg`}
            >
              <div className=" w-full h-3 lg:h-5 flex items-center gap-x-4  ">
                <input
                  type="checkbox"
                  onChange={toggleChange}
                  className=" h-5 w-5"
                />
                <input
                  type="text"
                  className={` 
                   w-full bg-slate-500 h-8 lg:h-10 whitespace-pre text-lg lg:text-xl p-2 rounded-lg border-none duration-300 content-center`}
                  value={task.todo}
                  readOnly
                />
                <button onClick={() => removeTodo(task.id)}>🗑</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
