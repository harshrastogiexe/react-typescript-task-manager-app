export type TodoType = "pending" | "complete";

export type activeTabType = "all" | "completed" | "pending";

export interface TodoStructure {
  message: string;
  timeStamp: Date;
  type: TodoType;
  id: number;
}
