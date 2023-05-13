import { escapeText } from "sx/utils";
import sx from "sx";

const { command } = sx.global();

command("git init", async (api) => {
  await api.typeText("git init");
});

command(
  "git commit",
  async (api) => {
    await api.typeText('git commit -m "');
  },
  { autoExecute: true }
);

command(
  "git commit amend",
  async (api, cmd) => {
    await api.typeText("git commit --amend");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git commit <%text%>",
  async (api, cmd) => {
    await api.typeText('git commit -m "');
    await api.typeText(escapeText(cmd.text));
    await api.typeText('"');
  },
  { autoExecute: true }
);

command(
  "git clone ",
  async (api) => {
    await api.typeText("git clone ");
  },
  { autoExecute: true }
);

command(
  ["git switch", "git switch branch", "git switch to previous branch"],
  async (api, cmd) => {
    await api.typeText(`git switch -`);
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git checkout",
  async (api, cmd) => {
    await api.typeText(`git checkout `);
  },
  { autoExecute: true }
);

command(
  "git checkout branch",
  async (api, cmd) => {
    await api.typeText(`git checkout -b `);
  },
  { autoExecute: true }
);

command(
  "git checkout branch <%text%>",
  async (api, cmd) => {
    await api.typeText(`git checkout -b ${cmd.text}`);
  },
  { autoExecute: true }
);

command(
  "git checkout <%text%>",
  async (api, cmd) => {
    await api.typeText(`git checkout ${cmd.text}`);
    await api.pressKey("tab");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git add all",
  async (api) => {
    await api.typeText("git add .");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["git add all and commit", "git add commit", "git add and commit"],
  async (api) => {
    await api.typeText("git add .");
    await api.pressKey("enter");
    await api.typeText('git commit -m "');
  },
  { autoExecute: true }
);

command(
  [
    "git add all and commit <%text%>",
    "git add commit <%text%>",
    "git add and commit <%text%>",
  ],
  async (api) => {
    await api.typeText("git add .");
    await api.pressKey("enter");
    await api.typeText('git commit -m "<%text%>"');
  },
  { autoExecute: true }
);

command(
  "git log",
  async (api) => {
    await api.typeText("git log");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git status",
  async (api) => {
    await api.typeText("git status");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git push",
  async (api) => {
    await api.typeText("git push");
  },
  { autoExecute: true }
);

command(
  "git stash",
  async (api) => {
    await api.typeText("git stash");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git stash apply",
  async (api) => {
    await api.typeText("git stash apply");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull",
  async (api) => {
    await api.typeText("git pull");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull origin main",
  async (api) => {
    await api.typeText("git pull origin main");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull origin master",
  async (api) => {
    await api.typeText("git pull origin master");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull rebase",
  async (api) => {
    await api.typeText("git pull --rebase");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull rebase origin main",
  async (api) => {
    await api.typeText("git pull --rebase origin main");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git pull rebase origin master",
  async (api) => {
    await api.typeText("git pull --rebase origin master");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git rebase continue",
  async (api) => {
    await api.typeText("git rebase --continue");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git rebase abort",
  async (api) => {
    await api.typeText("git rebase --abort");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command("git reset hard", async (api) => {
  await api.typeText("git reset --hard");
  await api.pressKey("enter");
});

command(
  "git fetch all",
  async (api) => {
    await api.typeText("git fetch --all");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git branch",
  async (api) => {
    await api.typeText("git branch");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git branch list all",
  async (api) => {
    await api.typeText("git branch --list --all");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git diff tool",
  async (api) => {
    await api.typeText("git difftool");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

[
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach(
  (number, index) => {
    command(`git diff tool head ${number}`, async (api) => {
      await api.typeText(`git difftool HEAD~${index + 1}`);
      await api.pressKey("enter");
    });
  },
  { autoExecute: true }
);

command(
  "git merge tool",
  async (api) => {
    await api.typeText("git mergetool");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git config list",
  async (api) => {
    await api.typeText("git config --list");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  "git config list global",
  async (api) => {
    await api.typeText("git config --list --global");
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command("gh repo", async (api) => {
  await api.typeText("gh repo");
  await api.pressKey("enter");
});

command("gh repo create", async (api) => {
  await api.typeText("gh repo create");
});

[
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach((number, index) => {
  command(`git rebase interactive head ${number}`, async (api) => {
    await api.typeText(`git rebase -i HEAD~${index + 1}`);
  });
});
