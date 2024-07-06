import React from "react";
import AddTodo from "../components/AddTodo";
import prisma from "../lib/prisma";
import "./globals.scss";
import Todo from "@/components/Todo";

const Home = async () => {
  // filtering goes in this findManyCall, where:, orderBy:, select:, take:, skip:
  const todos = await prisma.todoItem.findMany();
  // const todoCount = await  prisma.todoItem.count();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold">Todo List</span>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10">
          {todos.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
