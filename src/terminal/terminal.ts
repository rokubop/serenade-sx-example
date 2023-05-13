import sx from "sx";

const { command } = sx.global();

command(["cd up", "cd .."], async (api) => {
  await api.typeText("cd ..");
  await api.pressKey("enter");
});

command("cd <%text%>", async (api, m) => {
  await api.typeText("cd " + m.text);
  await api.pressKey("enter");
});
