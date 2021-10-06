import YsLoginPage from "../pageObjects/ys.login.page";

export const Open = {
  the: (page: typeof YsLoginPage) => page.open(),
};
