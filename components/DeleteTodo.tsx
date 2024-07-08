"use client";

import { deleteTodo } from "@/actions/todoActions";
import Form from "@/components/ui/Form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
