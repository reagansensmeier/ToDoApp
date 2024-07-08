import { complete } from "@/actions/todoActions";
import Form from "./ui/Form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/lib/todoTypes";

const CompleteTodo = ({ todo }: { todo: todoType }) => {
  const style = todo.taskStatus === "Completed" ? "default" : "outline";
  return (
    <Form action={complete}>
      <Input name="inputId" value={todo.id} type="hidden" />

      <Button variant={style} size="icon" type="submit">
        {<AiOutlineCheckCircle />}
      </Button>
    </Form>
  );
};

export default CompleteTodo;
