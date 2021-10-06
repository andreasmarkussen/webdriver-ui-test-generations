import playerTargets from "./player.targets";

export function playerState() {
  return playerTargets.playerFrame.getAttribute("data-cy-prop-player-state");
}

export const thePlayer = {
  isStarted: async () => {
    const playerStateValue = await playerState();
    return playerStateValue === "PLAYING";
  },
};
