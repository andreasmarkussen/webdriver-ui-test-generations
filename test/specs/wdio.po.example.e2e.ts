import LoginPage from "../pageObjects/wdio.example.login.page";
import SecurePage from "../pageObjects/wdio.example.secure.page";

describe("My Login application", () => {
  it("(generation 1) - should login with valid credentials", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    await $("#username").setValue("tomsmith");
    await $("#password").setValue("SuperSecretPassword!");
    await $('button[type="submit"]').click();

    await expect($("#flash")).toBeExisting();
    await expect($("#flash")).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("(generation 2) should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
