import sx from "sx";

const { command } = sx.app("chrome");

command(
  "close tab",
  async (api) => {
    await api.pressKey("w", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command("reopen tab", async (api) => {
  await api.pressKey("t", ["commandOrControl", "shift"]);
});

command("scroll to bottom", async (api) => {
  await api.pressKey("end", ["commandOrControl"]);
});

command("scroll to top", async (api) => {
  await api.pressKey("home", ["commandOrControl"]);
});

command(["hide links", "hide inputs"], async (api) => {
  await api.runCommand("clear");
});

command(
  "find <%text%>",
  async (api, matches) => {
    await api.pressKey("f", ["commandOrControl"]);
    await api.typeText(matches.text);
  },
  { autoExecute: true }
);

command(
  "copy url",
  async (api) => {
    await api.pressKey("l", ["commandOrControl"]);
    await api.pressKey("c", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command(
  "focus url",
  async (api) => {
    await api.pressKey("l", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command("refresh", async (api) => {
  await api.pressKey("r", ["commandOrControl"]);
});

command("hard refresh", async (api) => {
  await api.pressKey("r", ["shift", "commandOrControl"]);
});

command(
  ["show extensions", "open extensions"],
  async (api) => {
    await api.pressKey("t", ["commandOrControl"]);
    await api.pressKey("l", ["commandOrControl"]);
    await api.typeText("chrome://extensions/");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["show history", "open history"],
  async (api) => {
    await api.pressKey("t", ["commandOrControl"]);
    await api.pressKey("l", ["commandOrControl"]);
    await api.typeText("chrome://history/");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["show settings", "open settings"],
  async (api) => {
    await api.pressKey("t", ["commandOrControl"]);
    await api.pressKey("l", ["commandOrControl"]);
    await api.typeText("chrome://settings/");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["show downloads", "open downloads"],
  async (api) => {
    await api.pressKey("t", ["commandOrControl"]);
    await api.pressKey("l", ["commandOrControl"]);
    await api.typeText("chrome://downloads/");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  [
    "dev tools",
    "open dev tools",
    "hide dev tools",
    "show dev tools",
    "close dev tools",
  ],
  async (api) => {
    await api.pressKey("i", ["commandOrControl", "shift"]);
    await api.setMouseLocation(901, 884);
  }
);

[
  "console",
  "elements",
  "sources",
  "network",
  "performance",
  "memory",
  "application",
  "security",
  "audits",
  "lighthouse",
  "coverage",
  "profiler",
].forEach((tab) => {
  command(
    [`open ${tab}`, `focus ${tab}`, `show ${tab}`],
    async (api, matches) => {
      await api.pressKey("p", ["commandOrControl", "shift"]);
      await api.typeText(tab);
      await api.pressKey("enter");
    },
    { autoExecute: true }
  );
});

command(
  "clear console",
  async (api) => {
    await api.pressKey("l", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command(
  "toggle breakpoint",
  async (api) => {
    await api.pressKey("b", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command(
  "open file",
  async (api) => {
    await api.pressKey("p", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command(
  "open file <%file%>",
  async (api, matches) => {
    await api.pressKey("p", ["commandOrControl"]);
    await api.typeText(matches.file);
    await api.delay(500);
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["search file <%file%>", "search for <%file%>", "search for file <%file%>"],
  async (api, matches) => {
    await api.pressKey("p", ["commandOrControl"]);
    await api.typeText(matches.file);
    await api.delay(500);
  },
  { autoExecute: true }
);

command(
  "prompt",
  async (api) => {
    await api.pressKey("p", ["commandOrControl", "shift"]);
  },
  { autoExecute: true }
);

command(
  "prompt <%text%>",
  async (api, matches) => {
    await api.pressKey("p", ["commandOrControl", "shift"]);
    await api.typeText(matches.text);
  },
  { autoExecute: true }
);

command(
  ["line <%line%>", "go to line <%line%>"],
  async (api, matches) => {
    await api.pressKey("g", ["commandOrControl"]);
    await api.typeText(matches.line);
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(["toggle mobile view", "mobile view"], async (api) => {
  await api.pressKey("m", ["commandOrControl", "shift"]);
});

command(
  [
    "element picker",
    "element selector",
    "inspect element",
    "inspect",
    "select element picker",
    "show element picker",
    "show picker",
  ],
  async (api) => {
    await api.pressKey("c", ["commandOrControl", "shift"]);
  },
  { autoExecute: true }
);
