import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 * The section pages are for the TvSection, Movie, Series, etc.
 */
class YsPlayerPage extends Page {
  /**
   * define selectors using getter methods
   */
  get playerFrame() {
    return $("[data-cy=Player]");
  }
  /**
   * @returns the player state.
   * The player state can be either
   *  null: When it is just enabled
   *  PREPARING: When it is ??
   *  PLAYING: When it is actually playing content
   */
  get playerState() {
    return this.playerFrame.getAttribute("data-cy-prop-player-state");
  }

  /**
   *
   * @returns A promise when the player is playing
   * @throws An exception when the play has not started in 5 seconds
   */
  waitForPlayerToBeStarted() {
    return browser.waitUntil(async () => (await this.playerState) == "PLAYING");
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  //   open() {
  //     return super.open("login");
  //   }
}

export default new YsPlayerPage();
