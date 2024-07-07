import React from "react"
import Form from "./ui/Form"
import Button from "./ui/Button"
import Input from "./ui/Input"
import { create } from "@/actions/todoActions"

const AddTodo = () => {
    return (
        <Form 
            className="w-1/2 m-auto"
            action={create}
        >
            <div className="flex">
                <Input
                    name="input"
                    type="text"
                    placeholder="Add new Todo..."
                />
                <Button
                    type="submit"
                    text="Add"
                />
            </div>
        </Form>
    )
        
};

export default AddTodo;