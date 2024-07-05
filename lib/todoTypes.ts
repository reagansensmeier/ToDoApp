export type todoType = {
    id: string;
    title?: string | null;
    isCompleted: boolean;
    isPending: boolean;
    isUpdated: boolean;
    updatedAt?: Date | null;
    createdAt?: Date;
  };