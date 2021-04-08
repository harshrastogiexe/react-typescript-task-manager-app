import { TodoStructure, TodoType } from "../type/typeDecleration";

export class Todo implements TodoStructure {
  id: number;
  message: string;
  timeStamp: Date;
  type: TodoType;

  constructor(message: string, timeStamp: Date, type: TodoType) {
    this.message = message;
    this.timeStamp = timeStamp;
    this.type = type;
    this.id = timeStamp.getTime();
  }

  updateType(newType: TodoType) {
    this.type = newType;
  }
}
