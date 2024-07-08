import * as React from "react";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import CompleteTodo from "./CompleteTodo";
import { TableCell, TableRow } from "@/components/ui/table";
import { todoType } from "@/lib/todoTypes";
import { Button } from "./ui/button";
import { pending } from "@/actions/todoActions";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import PendingTodo from "./PendingTodo";

interface TodoProps {
  todo: todoType;
  onEditSubmit?: () => void; // Optional callback for edit submission
}

const Todo: React.FC<TodoProps> = ({ todo, onEditSubmit }) => {
  const todoStyle = {
    textDecoration: todo.taskStatus === "Completed" ? "line-through" : "none",
    opacity: todo.taskStatus === "Completed" ? 0.5 : 1,
    backgroundColor: todo.taskStatus === "Pending" ? "bg-rose-500" : "white",
  };

  return (
    <TableRow key={todo.id} style={todoStyle}>
      <TableCell>
        <CompleteTodo todo={todo} />
      </TableCell>
      <TableCell>
        <PendingTodo todo={todo}></PendingTodo>
      </TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>{todo.taskStatus}</TableCell>
      <TableCell>{todo.createdAt.toDateString()}</TableCell>
      <TableCell>
        <EditTodo todo={todo} onSubmit={onEditSubmit} />
      </TableCell>
      <TableCell>
        <DeleteTodo todo={todo} />
      </TableCell>
    </TableRow>
  );
};

export default Todo;
