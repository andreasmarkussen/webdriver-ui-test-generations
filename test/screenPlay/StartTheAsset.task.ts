import YsSynopsisPage from "../pageObjects/ys.synopsis.page";
import YsPlayerPage from "../pageObjects/ys.player.page";
import { Task } from "./Task";

export const StartTheAsset: Task = {
  name: "Start the asset on the synopsis",
  fn: async () => {
    // On the Synopsis - Starting the player
    await YsSynopsisPage.clickPlayButton();

    // Wait for the player to be started
    await YsPlayerPage.waitForPlayerToBeStarted();
  },
};
