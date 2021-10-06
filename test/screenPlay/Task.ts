export interface Task {
  name: string;
  fn: () => Promise<any>;
}
