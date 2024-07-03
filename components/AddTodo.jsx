import React from "react"
import Form from "./Form"
import Button from "./Button"
import Input from "./Input"

const AddTodo = () => {
    return (
        <Form className="w-1/2 m-auto">
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