"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todoItem.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function complete(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todoItem.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }

  await prisma.todoItem.update({
    where: {
      id: inputId,
    },
    data: {
      taskStatus: "Completed",
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputID = formData.get("inputId") as string;

  await prisma.todoItem.update({
    where: {
      id: inputID,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function pending(formData: FormData) {
  const inputID = formData.get("inputId") as string;

  await prisma.todoItem.update({
    where: {
      id: inputID,
    },
    data: {
      taskStatus: "Pending",
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputID = formData.get("inputId") as string;

  await prisma.todoItem.delete({
    where: {
      id: inputID,
    },
  });

  revalidatePath("/");
}
