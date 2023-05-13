import { numberMap10, numberMap20 } from "sx/consts";
import { forEachKeyVal } from "sx/utils";
import sx from "sx";

const { command } = sx.app("chrome");

command(
  ["play", "stop"],
  async (api) => {
    await api.pressKey("space");
  },
  { autoExecute: true }
);

command(
  ["mute", "unmute"],
  async (api) => {
    await api.pressKey("m");
  },
  { autoExecute: true }
);

command(
  "volume up",
  async (api) => {
    await api.pressKey("up");
  },
  { autoExecute: true }
);

forEachKeyVal(numberMap20, (phrase, number) => {
  command(
    `volume up ${phrase}`,
    async (api) => {
      await api.pressKey("up", [], Number(number));
    },
    { autoExecute: true }
  );
});

command(
  "volume down",
  async (api) => {
    await api.pressKey("down");
  },
  { autoExecute: true }
);

forEachKeyVal(numberMap20, (phrase, number) => {
  command(
    `volume down ${phrase}`,
    async (api) => {
      await api.pressKey("down", [], Number(number));
    },
    { autoExecute: true }
  );
});

command(
  "slow down",
  async (api) => {
    await api.pressKey(",", ["shift"]);
  },
  { autoExecute: true }
);

forEachKeyVal(numberMap10, (phrase, number) => {
  command(
    `slow down ${phrase}`,
    async (api) => {
      await api.pressKey(",", ["shift"], Number(number));
    },
    { autoExecute: true }
  );
});

command("speed up", async (api) => {
  await api.pressKey(".", ["shift"]);
});

forEachKeyVal(numberMap10, (phrase, number) => {
  command(
    `speed up ${phrase}`,
    async (api) => {
      await api.pressKey(".", ["shift"], Number(number));
    },
    { autoExecute: true }
  );
});

command(
  [
    "fullscreen",
    "toggle fullscreen",
    "fullscreen mode",
    "toggle fullscreen mode",
  ],
  async (api) => {
    await api.pressKey("f");
  },
  { autoExecute: true }
);

command(
  ["theatre", "toggle theatre", "toggle theatre mode", "theatre mode"],
  async (api) => {
    await api.pressKey("t");
  },
  { autoExecute: true }
);

command(
  "restore",
  async (api) => {
    await api.pressKey("f");
  },
  { autoExecute: true }
);
