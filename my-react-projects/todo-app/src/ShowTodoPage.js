function ShowTodoPage(props) {
  let todoArr = props.todo;

  function handleClick(e, todoId) {
    
   /* todoArr = todoArr.filter(todo => todo.id !== todoId);
    props.setTodo(todoArr);
    alert("Todo Completed");*/
    let newTodoArr = []

    for(let i=0;i< todoArr.length;i++){
      newTodoArr[i] = todoArr[i]

      if(todoArr[i].id == todoId){
        newTodoArr[i].status = "completed";
        newTodoArr[i].completedDate = new Date()
      }
    }
    props.setTodo(newTodoArr);
  }

  return (
    <div className="bg-purple-200 h-[200px] flex justify-center items-center p-45">
      <table className="table-auto border-collapse border border-purple-500 rounded-lg shadow-lg w-full max-w-md">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="border border-purple-400 px-3 py-2 text-left text-sm">Todo Title</th>
            <th className="border border-purple-400 px-3 py-2 text-left text-sm">Due Date</th>
            <th className="border border-purple-400 px-3 py-2 text-center text-sm">Mark Done</th>
          </tr>
        </thead>R
        <tbody>
          {todoArr.map((value) => (
            value.status=="pending" && (
            <tr
              key={value.id}
              className="bg-white even:bg-purple-100 hover:bg-purple-200 transition-colors duration-300"
            >
              <td className="border border-purple-400 px-3 py-2 text-sm">{value.todoTitle}</td>
              <td className="border border-purple-400 px-3 py-2 text-sm">{value.dueDate}</td>
              <td className="border border-purple-400 px-3 py-2 text-center">
                <button
                  onClick={(e) => handleClick(e, value.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 rounded-md shadow transition text-sm"
                >
                  ✅
                </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTodoPage;
