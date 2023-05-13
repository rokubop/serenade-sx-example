import { clipboard } from "sx";
import sx from "sx";

const { command } = sx.global();

command(
  [
    "get mouse location",
    "get mouse position",
    "copy mouse location",
    "copy mouse position",
  ],
  async (api) => {
    const loc = await api.getMouseLocation();
    await clipboard.setClipboard(
      `await api.setMouseLocation(${loc.x}, ${loc.y})`
    );
  }
);

command(["get current app"], async (api) => {
  const appPath = await api.getActiveApplication();
  await clipboard.setClipboard(appPath);
});
