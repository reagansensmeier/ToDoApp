import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import CompleteTodo from "./CompleteTodo";
import { todoType } from "@/lib/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  const title = todo.title;

  return (
    <div
      className="w-full  flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <CompleteTodo todo={todo} />
      <span className="text-center font-bold uppercase">{title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
