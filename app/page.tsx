import React from "react";
import AddTodo from '../components/AddTodo'
import prisma from '../lib/prisma';
import "./globals.scss";


export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold">
        Todo App
      </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2"> Server Actions </span>
      </h1>

      <div className="flex justify-ccenter flex-col items-center w-[1000px]">
        <AddTodo/>
      </div>
    </div>
  );
}

