import React from "react";
import columns from "@/components/columns";
import prisma from "../lib/prisma";
import { todoType } from "@/lib/todoTypes";
import "./globals.scss";
import TableView from "@/components/TableView";
import AddTodo from "../components/AddTodo";

const Home = async () => {
  const todos = await prisma.todoItem.findMany({
    orderBy: [{ taskStatus: "asc" }, { createdAt: "asc" }],
  });

  const typedTodos: todoType[] = todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    taskStatus: todo.taskStatus as todoType["taskStatus"],
    createdAt: todo.createdAt,
  }));

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold text-rose-700">
        My Todo List
      </span>
      <div className="flex justify-center flex-col items-center w-[1200px] my-10">
        <AddTodo />
      </div>
      <TableView columns={columns} data={typedTodos} />
    </div>
  );
};

export default Home;
