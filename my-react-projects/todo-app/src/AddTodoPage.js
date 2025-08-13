import { useState } from 'react';



function AddTodoPage(props) {
  let todo = props.todo;
  let setTodo = props.setTodo;

  let [formData, setFormData] = useState({
    todoTitle: '',
    dueDate: '',
    status: 'pending',
  });

  function handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [inputName]: inputValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted, data = ' + JSON.stringify(formData));

    //update state
    setTodo(previousTodos => ([
      ...previousTodos,
      {
        id: Date.now(), // unique id
        todoTitle: formData.todoTitle,
        dueDate: formData.dueDate,
        completeDate: '',
        status: formData.status,
      }
    ]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-lg w-full"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700 drop-shadow-lg">
          ✍️ Add New Todo
        </h2>

        <label
          htmlFor="todoTitle"
          className="block mb-2 font-semibold text-gray-700 hover:text-purple-600 transition"
        >
          Todo Title
        </label>
        <input
          id="todoTitle"
          type="text"
          placeholder="Enter your todo title"
          name="todoTitle"
          value={formData.todoTitle}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600 transition"
          required
        />

        <label
          htmlFor="dueDate"
          className="block mb-2 font-semibold text-gray-700 hover:text-purple-600 transition"
        >
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full mb-8 px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600 transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-1"
        >
          🚀 Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;
