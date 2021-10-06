import { Task } from "./Task";
import { Navigate } from "../screenPlay/Navigate";
export const NavigateToATVSynopsis: Task = {
  name: "Navigate To A TV Synopsis",
  fn: () => {
    return Navigate.to("ATvSynopsis");
  },
};
