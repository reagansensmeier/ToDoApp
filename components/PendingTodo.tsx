import { pending } from "@/actions/todoActions";
import Form from "./ui/Form";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { TbProgress } from "react-icons/tb";
import { todoType } from "@/lib/todoTypes";

const PendingTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={pending}>
      <Input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button actionButton type="button" text={<TbProgress />} />
    </Form>
  );
};

export default PendingTodo;
