"use client";
import { ColumnDef } from "@tanstack/react-table";
import { todoType } from "@/lib/todoTypes";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";

const columns: ColumnDef<todoType>[] = [
  { accessorKey: "complete", header: "Complete" },
  { accessorKey: "pending", header: "Pending?" },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "taskStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  { accessorKey: "edit", header: "Edit Task" },

  { accessorKey: "delete", header: "Delete" },
];

export default columns;
