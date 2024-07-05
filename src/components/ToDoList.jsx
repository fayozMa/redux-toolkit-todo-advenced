function ToDoList({ todos }) {
  return (
    <div>
      {todos &&
        todos.reverse().map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex gap-4 items-center w-96 justify-between border-2 p-5 rounded-2xl border-gray-500 shadow-xl mt-5"
            >
              <h3 className="text-3xl">{todo.title}</h3>
              <button
                onClick={() => deleteDocument(todo.id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ToDoList;
