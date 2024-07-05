import { useFirestore } from "../hooks/useFirestore";
function ToDoList({ todos }) {
  const {deleteDocument,changeStatus} = useFirestore()
  return (
    <div>
      {todos &&
        todos.reverse().map((todo) => {
          return (
            <div
              key={todo.id}
              className={`flex gap-4 items-center w-96 justify-between border-2 p-5 rounded-2xl transition-all border-gray-500 shadow-xl mt-5 ${
                todo.completed ? "opacity-50" : "opacity-100"
              }`}
            >
              <h3 className={`text-3xl  ${todo.completed  ? "line-through transition-all" : ""}`}>{todo.title}</h3>
              <div className="flex gap-5 items-center">
                <button onClick={()=>changeStatus(todo.id,todo.completed)} className="btn btn-info">{todo.completed ? 'uncomplete':'complete'}</button>
                <button
                onClick={() => deleteDocument(todo.id)}
                className="btn btn-error btn-sm"
              >
                Delete
              </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ToDoList;
