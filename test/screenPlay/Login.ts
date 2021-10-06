import YsLoginPage from "../pageObjects/ys.login.page";

export const Login = {
  _username: "",
  _withPassword: "",
  with: (userName: string, password: string) => {
    return YsLoginPage.login(userName, password);
  },
  as: (userName: string) => {
    Login._username = userName;
    return Login;
  },
  withPassword: (password: string) => {
    return YsLoginPage.login(Login._username, password);
  },
};
