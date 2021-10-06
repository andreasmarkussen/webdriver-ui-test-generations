import { Task } from "./Task";

export async function attemptTo(
  ...args: (Promise<any> | Task)[]
): Promise<any> {
  for (var i = 1; i < args.length; i++) {
    if (args[i] instanceof Promise) {
      await Promise.resolve(args[i]);
    } else {
      // must be a type then
      await (args[i] as Task).fn();
    }
  }
  return Promise.resolve();
}
