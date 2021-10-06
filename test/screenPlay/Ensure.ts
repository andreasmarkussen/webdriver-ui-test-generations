import YsLoginPage from "../pageObjects/ys.login.page";

export const Ensure = {
  that:async (value: Boolean | Promise<boolean>) =>
    Promise.resolve(expect(await value).toBeTruthy()),
};
