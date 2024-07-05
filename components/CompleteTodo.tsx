import { complete } from "@/actions/todoActions";
import Form from "./ui/Form";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/lib/todoTypes";

const CompleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={complete}>
      <Input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default CompleteTodo;
