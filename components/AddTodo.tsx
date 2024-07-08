import React from "react";
import Form from "./ui/Form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { create } from "@/actions/todoActions";

const AddTodo = () => {
  return (
    <Form className="w-1/2 m-auto" action={create}>
      <div className="flex">
        <Input name="input" type="text" placeholder="Add new Todo..." />
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};

export default AddTodo;
