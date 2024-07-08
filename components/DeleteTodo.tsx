"use client";

import { deleteTodo } from "@/actions/todoActions";
import Form from "./ui/Form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { todoType } from "@/lib/todoTypes";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button type="submit">
        <BsFillTrashFill />
      </Button>
    </Form>
  );
};

export default DeleteTodo;
