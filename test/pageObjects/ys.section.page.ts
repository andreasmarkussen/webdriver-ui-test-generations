import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 * The section pages are for the TvSection, Movie, Series, etc.
 */
class YsSectionPage extends Page {
  /**
   * define selectors using getter methods
   */
  get promoViewFrame() {
    return $("[data-cy=Carrousel]");
  }
  get carrouselItems() {
    return $$("[data-qa-file=carrousel-item]");
  }
  //   get btnSubmit() {
  //     //  await $("[data-cy=loginButton]").click();
  //     return $('button[type="submit"]');
  //   }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  //   async login(username: string, password: string) {
  //     //await this.inputUsername.setValue(username);
  //     await this.inputPassword.setValue(password);
  //     await this.btnSubmit.click();
  //     }

  async waitForPageToBeLoaded() {
    return browser.waitUntil(() => this.promoViewFrame.isDisplayed());
  }

  async clickARandomPromoview() {
    const clickablePromoviewItems = await this.carrouselItems.filter(
      async (element) => element.isClickable()
    );

    if (clickablePromoviewItems.length == 0) {
      throw new Error("No promoview card visible");
    }
    // Actually clicking on the Promoview
    return clickablePromoviewItems[0].click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  // open() {
  //   return super.open("login");
  // }
}

export default new YsSectionPage();
