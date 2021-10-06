/**
 * Third generation automation
 *  - Encapsulate the implementation details of html page using page objects
 *
 * Task:
 *  - Remove all the HTML Implementation details
 */
import YsLoginPage from "../pageObjects/ys.login.page";
import { StartTheAsset } from "../screenPlay/StartTheAsset.task";
import { thePlayer } from "../screenPlay/player.questions";
import { Ensure } from "../screenPlay/Ensure";
import { attemptTo } from "../screenPlay/attemptTo";
import { NavigateToATVSynopsis } from "../screenPlay/NavigateToATVSynopsis.task";
import { LoginWithValidCredentials } from "../screenPlay/LoginWithValidCredentials.task";

describe("Player Module", () => {
  it("should should play a movie", async () =>
    attemptTo(
      YsLoginPage.open(),
      LoginWithValidCredentials,
      NavigateToATVSynopsis,
      StartTheAsset,
      Ensure.that(thePlayer.isStarted())
    ));
});
