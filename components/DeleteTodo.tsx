"use client";

import { deleteTodo } from "@/actions/todoActions";
import Form from "./ui/Form";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { todoType } from "@/lib/todoTypes";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
