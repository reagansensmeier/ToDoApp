import * as React from "react";
import { BiEdit } from "react-icons/bi";
import Form from "./ui/Form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { edit } from "@/actions/todoActions";
import { todoType } from "@/lib/todoTypes";

interface EditTodoProps {
  todo: todoType;
  onSubmit?: () => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo, onSubmit }) => {
  const [editTodo, setEditTodo] = React.useState(false);

  const handleEdit = () => {
    if (todo.taskStatus === "Completed") {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={handleEdit}>
        <BiEdit />
      </Button>

      {editTodo && (
        <Form
          action={edit}
          onSubmit={handleSubmit}
          className="flex items-center"
        >
          <Input name="inputId" value={todo.id} type="hidden" />
          <Input
            type="text"
            name="newTitle"
            placeholder="Edit Todo..."
            className="border border-gray-300 rounded-md p-2"
          />
          <Button type="submit"> Save</Button>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
