import { pending } from "@/actions/todoActions";
import Form from "./ui/Form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TbProgress } from "react-icons/tb";
import { todoType } from "@/lib/todoTypes";

const PendingTodo = ({ todo }: { todo: todoType }) => {
  const style = todo.taskStatus === "Pending" ? "default" : "outline";
  return (
    <Form action={pending}>
      <Input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button variant={style}>
        <TbProgress />
      </Button>
    </Form>
  );
};

export default PendingTodo;
