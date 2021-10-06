/**
 * Second generation automation
 *  - Encapsulate the implementation details of html page using page objects
 *
 *
 * Task:
 *  - Remove all the HTML Implementation details
 */

import YsLoginPage from "../pageObjects/ys.login.page";
import YsSectionPage from "../pageObjects/ys.section.page";
import YsSynopsisPage from "../pageObjects/ys.synopsis.page";
import YsPlayerPage from "../pageObjects/ys.player.page";


describe("Player Module", () => {
  const userName = process.env.SUT_USERNAME;
  const password = process.env.SUT_PASSWORD;

  it("should should play a movie", async () => {
    // Open the web site
    await YsLoginPage.open();

    // Login
    await YsLoginPage.login(userName, password);

    // On A Content Page - click the first promoview (Carousel item data-qa-file="carrousel-item" )
    // await browser.waitUntil(() => $("main").isDisplayed());
    await YsSectionPage.waitForPageToBeLoaded();
    
    // Find a random element on the promoview that is clickable
    await YsSectionPage.clickARandomPromoview()

    // On the Synopsis - Starting the player
    await YsSynopsisPage.clickPlayButton();

    // Wait for the player to be started
    await YsPlayerPage.waitForPlayerToBeStarted();

    // Player.getState()
    expect(await YsPlayerPage.playerState).toEqual("PLAYING");
  });
});
