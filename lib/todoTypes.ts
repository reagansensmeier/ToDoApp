export type todoType = {
  id: string;
  title: string | null;
  taskStatus: "Todo" | "Pending" | "Completed" | "Deleted";
  createdAt: Date;
};
