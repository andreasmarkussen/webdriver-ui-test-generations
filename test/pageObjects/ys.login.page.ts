import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class YsLoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    // return $("[Placeholder=Brugernavn]");
    return $("[data-cy=usernameInput]");
  }
  get inputPassword() {
    return $("[data-cy=passwordInput]");
  }
  get btnSubmit() {
    //  await $("[data-cy=loginButton]").click();
    return $('button[type="submit"]');
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  async open() {
    const currentUrl = await browser.url;
    if (!String(currentUrl).includes("/login")) return browser.url("/");
    return Promise.resolve("");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username: string, password: string) {
    await this.open();
    await browser.waitUntil(() => this.inputUsername.isDisplayed());
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new YsLoginPage();
