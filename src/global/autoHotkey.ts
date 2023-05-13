import sx, { autoHotKey } from "sx";
import { numberMap10 } from "sx/consts";
import { forEachKeyVal, isWindows } from "sx/utils";

if (isWindows()) {
  const { command } = sx.global();

  command("shift click", async (api) => {
    await autoHotKey.pressKey("LButton", ["shift"]);
  });

  command("control click", async (api) => {
    await autoHotKey.pressKey("LButton", ["ctrl"]);
  });

  command("alt click", async (api) => {
    await autoHotKey.pressKey("LButton", ["alt"]);
  });

  command("screen left", async (api) => {
    await autoHotKey.pressKey("Left", ["LWin", "Shift"]);
  });

  command("screen right", async (api) => {
    await autoHotKey.pressKey("Right", ["LWin", "Shift"]);
  });

  command(
    ["desktop one", "desktop left", "previous desktop", "last desktop"],
    async (api) => {
      await autoHotKey.pressKey("Left", ["LWin", "Ctrl"]);
    }
  );

  command(["desktop two", "desktop right", "next desktop"], async (api) => {
    await autoHotKey.pressKey("Right", ["LWin", "Ctrl"]);
  });

  command(
    ["minimize", "minimize window"],
    async (api) => {
      await autoHotKey.pressKey("Down", ["LWin"]);
    },
    { autoExecute: true, chainable: "any" }
  );

  command(
    "close window",
    async (api) => {
      await autoHotKey.pressKey("F4", ["Alt"]);
    },
    {
      autoExecute: true,
      chainable: "any",
    }
  );

  command("wheel up", async (api) => {
    await autoHotKey.scroll("up", [], 6);
  });

  forEachKeyVal(numberMap10, (phrase, number) => {
    command(`wheel up ${phrase}`, async (api) => {
      await autoHotKey.scroll("up", [], Number(number));
    });
  });

  command("wheel down", async (api) => {
    await autoHotKey.scroll("down", [], 6);
  });

  forEachKeyVal(numberMap10, (phrase, number) => {
    command(`wheel down ${phrase}`, async (api) => {
      await autoHotKey.scroll("down", [], Number(number));
    });
  });

  command("system copy", async (api) => {
    await autoHotKey.pressKey("c", ["ctrl"]);
  });

  command("system paste", async (api) => {
    await autoHotKey.pressKey("v", ["ctrl"]);
  });
}
