import sx from "sx";
import { isWindows } from "sx/utils";

if (isWindows()) {
  sx.app("explorer").command("delete file", async (api) => {
    await api.pressKey("delete");
  });

  sx.global().command("open folder <%text%>", async (api, cmd) => {
    await api.pressKey("win");
    await api.delay(100);
    await api.typeText("folder:" + cmd.text);
    await api.pressKey("enter");
  });

  sx.global().command(
    "new folder",
    async (api, cmd) => {
      await api.pressKey("n", ["ctrl", "shift"]);
    },
    { autoExecute: true }
  );

  sx.global().command("open windows settings", async (api, cmd) => {
    await api.pressKey("win");
    await api.delay(100);
    await api.typeText("settings");
    await api.pressKey("enter");
  });

  sx.global().command("search folder <%text%>", async (api, cmd) => {
    await api.pressKey("win");
    await api.delay(100);
    await api.typeText("folder:" + cmd.text);
  });

  sx.global().command(
    ["show desktop", "restore desktop", "hide desktop"],
    async (api) => {
      await api.pressKey("d", ["win"]);
    }
  );

  sx.global().command(["show all windows", "show windows"], async (api) => {
    await api.pressKey("tab", ["win"]);
  });

  sx.global().command("smart paste", async (api) => {
    await api.pressKey("v", ["win"]);
  });

  sx.global().command("window left", async (api) => {
    await api.pressKey("left", ["win"]);
    await api.delay(500);
    await api.pressKey("escape");
  });

  sx.global().command("window right", async (api) => {
    await api.pressKey("right", ["win"]);
    await api.delay(500);
    await api.pressKey("escape");
  });

  sx.global().command(
    ["maximize", "maximize window"],
    async (api) => {
      await api.pressKey("space", ["alt"]);
      await api.delay(200);
      await api.pressKey("x");
    },
    { autoExecute: true, chainable: "any" }
  );

  sx.global().command(["restore window"], async (api) => {
    await api.pressKey("space", ["alt"]);
    await api.delay(200);
    await api.pressKey("r");
  });

  sx.global().command(
    [
      "swap",
      "swap window",
      "switch window",
      "last window",
      "other window",
      "previous window",
    ],
    async (api) => {
      await api.pressKey("tab", ["alt"]);
    },
    {
      autoExecute: true,
      chainable: "firstOnly",
    }
  );

  sx.global().command(["rename", "rename file"], async (api) => {
    await api.pressKey("f2");
  });

  sx.global().command("shutdown computer", async (api) => {
    await api.pressKey("win");
    await api.delay(500);
    await api.pressKey("up");
    await api.pressKey("right");
    await api.pressKey("space");
    await api.delay(500);
    await api.pressKey("down", [], 2);
    await api.pressKey("space");
  });

  sx.global().command("restart computer", async (api) => {
    await api.pressKey("win");
    await api.delay(500);
    await api.pressKey("up");
    await api.pressKey("right");
    await api.pressKey("space");
    await api.delay(500);
    await api.pressKey("down", [], 3);
    await api.pressKey("space");
  });

  sx.global().command(
    ["api.delay computer", "computer api.delay"],
    async (api) => {
      await api.pressKey("win");
      await api.delay(500);
      await api.pressKey("up");
      await api.pressKey("right");
      await api.pressKey("space");
      await api.delay(500);
      await api.pressKey("down", [], 1);
      await api.pressKey("space");
    }
  );
}
