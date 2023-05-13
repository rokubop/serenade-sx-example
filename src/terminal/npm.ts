import sx from "sx";

const { command } = sx.global();

command("npm init", async (api) => {
  await api.typeText("npm init");
});

command("npm install", async (api) => {
  await api.typeText("npm install");
});

command("npm docs <%text%>", async (api, cmd) => {
  await api.typeText("npm docs ");
  await api.typeText(cmd.text);
  await api.pressKey("enter");
});

command("npm search <%text%>", async (api, cmd) => {
  await api.typeText("npm search ");
  await api.typeText(cmd.text);
  await api.pressKey("enter");
});

command("npm install <%text%>", async (api, cmd) => {
  await api.typeText("npm install ");
  await api.typeText(cmd.text);
});

command("npm run start", async (api) => {
  await api.typeText("npm run start");
  await api.pressKey("enter");
});

command("npm run build", async (api) => {
  await api.typeText("npm run build");
  await api.pressKey("enter");
});

command("npm run dev", async (api) => {
  await api.typeText("npm run dev");
  await api.pressKey("enter");
});

command("npm run watch", async (api) => {
  await api.typeText("npm run watch");
  await api.pressKey("enter");
});

command(["npm remove", "npm rm"], async (api) => {
  await api.typeText("npm rm ");
});

command(["npm remove <%text%>", "npm rm <%text%>"], async (api, matches) => {
  await api.typeText(`npm rm ${matches.text}`);
});

command("nvm", async (api) => {
  await api.typeText("nvm");
  await api.pressKey("enter");
});

command("nvm version", async (api) => {
  await api.typeText("nvm --version");
  await api.pressKey("enter");
});

command("nvm current", async (api) => {
  await api.typeText("nvm current");
  await api.pressKey("enter");
});

command("nvm use <%version%>", async (api, cmd) => {
  await api.typeText("nvm use " + cmd.version);
  await api.pressKey("enter");
});
