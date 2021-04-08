export type TodoType = "pending" | "complete";

export interface TodoStructure {
  message: string;
  timeStamp: Date;
  type: TodoType;
  id: number;
}
