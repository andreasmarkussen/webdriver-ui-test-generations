import { Task } from "./Task";
import { Login } from "../screenPlay/Login";
const userName = process.env.SUT_USERNAME;
const password = process.env.SUT_PASSWORD;

export const LoginWithValidCredentials: Task = {
  name: "Login with Valid credentials",
  fn: async () => {
    return Login.as(userName).withPassword(password);
  },
};
