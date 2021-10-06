import YsLoginPage from "../pageObjects/ys.login.page";
import YsSectionPage from "../pageObjects/ys.section.page";
import YsSynopsisPage from "../pageObjects/ys.synopsis.page"

export const Navigate = {
  to: async (menuItem: string) => {
    switch (menuItem) {
      case "ATvSynopsis": {
        await YsSectionPage.waitForPageToBeLoaded();

        // Find a random element on the promoview that is clickable
        await YsSectionPage.clickARandomPromoview();

        // On the Synopsis - Starting the player
        await YsSynopsisPage.clickPlayButton();
        break;
      }
      default: {
        throw new Error("Unknown action " + menuItem);
        } 
    }
  },
};
