import sx from "sx";

const { command } = sx.global();

command("yarn install", async (api) => {
  await api.typeText("yarn install");
});

command("yarn run", async (api) => {
  await api.typeText("yarn run");
  await api.pressKey("enter");
});

command("yarn watch", async (api) => {
  await api.typeText("yarn watch");
  await api.pressKey("enter");
});

command("yarn run watch", async (api) => {
  await api.typeText("yarn run watch");
  await api.pressKey("enter");
});
