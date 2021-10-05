/**
 * Second generation automation 
 *  - Encapsulate the implementation details of html page using page objects
 * 
 * 
 * Task:
 *  - Remove all the HTML Implementation details
 */


describe("Player Module", () => {
    const userName = process.env.SUT_USERNAME;
    const password = process.env.SUT_PASSWORD;

  it("should should play a movie", async () => {
    // Open the web site
    await browser.url(``);

    // Login
    await $("[data-cy=usernameInput]").setValue(userName);
    await $("[data-cy=passwordInput]").setValue(password);
    await $("[data-cy=loginButton]").click();

    // On A Content Page - click the first promoview (Carousel item data-qa-file="carrousel-item" )
    await browser.waitUntil(() => $("main").isDisplayed());
    await browser.waitUntil(() => $("[data-cy=Carrousel]").isDisplayed());

    // Find a random element on the promoview that is clickable
    const clickablePromoviewItems = await $$(
      "[data-qa-file=carrousel-item]"
    ).filter(async (element) => element.isClickable());

    expect(clickablePromoviewItems.length).toBeGreaterThan(0);
    // Actually clicking on the Promoview
    await clickablePromoviewItems[0].click();

    // On the Synopsis - Starting the player
    await $("[data-qa-file=SynopsisControls] [data-qa-file=Button]").click();

    // Wait for the player to be started
    await browser.waitUntil( // Player.isState("PLAYING")
      async () =>
        (await $("[data-cy=Player]").getAttribute(
          "data-cy-prop-player-state"
        )) == "PLAYING"
    );
    
    // Player.getState()
    const playerState = await $("[data-cy=Player]").getAttribute(
      "data-cy-prop-player-state"
    );
    expect(playerState).toEqual("PLAYING");
  });
});
