import sx from "sx";
import { numberMap10 } from "sx/consts";
import { forEachKeyVal } from "sx/utils";

const { command } = sx.app("code");

// also closes tabs like keyboard shortcuts and diffs
command(
  "close tab",
  async (api) => {
    await api.evaluateInPlugin("workbench.action.closeActiveEditor");
  },
  { autoExecute: true, chainable: "lastOnly" }
);

command(
  "close all tabs",
  async (api) => {
    await api.evaluateInPlugin("openEditors.closeAll");
  },
  { autoExecute: true }
);

command(
  "close other tabs",
  async (api) => {
    await api.evaluateInPlugin("workbench.action.closeOtherEditors");
  },
  { autoExecute: true }
);

// some commands are redeclaring native commands just for the autoExecute
forEachKeyVal(numberMap10, (phrase, number) => {
  command(
    `tab ${phrase}`,
    async (api) => {
      await api.evaluateInPlugin(`workbench.action.openEditorAtIndex${number}`);
    },
    { autoExecute: true, chainable: "any" }
  );
});

command(["reopen tab", "reopen last tab"], async (api) => {
  await api.evaluateInPlugin("workbench.action.reopenClosedEditor");
});

command(["select", "select next"], async (api) => {
  await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
});

command(
  ["select next <%number%>"],
  async (api, matches) => {
    const increment = parseInt(matches.number);
    for (let index = 0; index < increment; index++) {
      await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
    }
  },
  { autoExecute: true }
);

command(
  ["select matching", "select all matching", "select all matches"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.selectHighlights");
  },
  { autoExecute: true }
);

command(
  ["select all <%text%>"],
  async (api, matches) => {
    await api.runCommand(`select ${matches.text}`);
    await api.evaluateInPlugin("editor.action.selectHighlights");
  },
  { autoExecute: true }
);

command(
  ["hover", "show hover"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.showHover");
  },
  { autoExecute: true }
);

command(
  "hover <%text%>",
  async (api, matches) => {
    await api.runCommand(`go to ${matches.text}`);
    await api.evaluateInPlugin("editor.action.showHover");
  },
  { autoExecute: true }
);

command(
  "hover next <%text%>",
  async (api, matches) => {
    await api.runCommand(`go to next ${matches.text}`);
    await api.evaluateInPlugin("editor.action.showHover");
  },
  { autoExecute: true }
);

command(
  "hover previous <%text%>",
  async (api, matches) => {
    await api.runCommand(`go to previous ${matches.text}`);
    await api.evaluateInPlugin("editor.action.showHover");
  },
  { autoExecute: true }
);

command("open folder", async (api) => {
  await api.evaluateInPlugin("workbench.action.files.openLocalFolder");
});

command(
  ["expand", "expand selection", "select more"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.smartSelect.expand");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["shrink", "shrink selection", "select less"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.smartSelect.shrink");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["keyboard shortcuts", "show keyboard shortcuts", "open keyboard shortcuts"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.openGlobalKeybindings");
    await api.setMouseLocation(924, 107);
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["settings", "open settings", "show settings"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.openSettings");
    await api.setMouseLocation(924, 107);
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["resize terminal down", "resize term down"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.resizePaneDown");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["resize terminal up", "resize term up"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.resizePaneUp");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  [
    "move right",
    "move to group two",
    "move to next group",
    "move to right group",
    "split right",
    "split tab right",
    "split tabs",
  ],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.moveEditorToNextGroup");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["merge groups", "single group", "collapse groups", "join groups"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.editorLayoutSingle");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  "split down",
  async (api) => {
    await api.evaluateInPlugin("workbench.action.editorLayoutTwoRows");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  "close group",
  async (api) => {
    await api.evaluateInPlugin("workbench.action.closeEditorsInGroup");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["group one", "focus group one"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.focusFirstEditorGroup");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["group two", "focus group two"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.focusSecondEditorGroup");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["group three", "focus group 3"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.focusThirdEditorGroup");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["clear terminal", "clear term"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.clear");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  [
    "toggle sidebar",
    "show sidebar",
    "hide sidebar",
    "close sidebar",
    "focus sidebar",
  ],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.toggleSidebarVisibility");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["show files", "focus files"],
  async (api) => {
    await api.evaluateInPlugin("workbench.explorer.fileView.focus");
    await api.setMouseLocation(195, 515);
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["file up", "previous file"],
  async (api) => {
    await api.pressKey("up");
    await api.pressKey("space");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["file down", "next file"],
  async (api) => {
    await api.pressKey("down");
    await api.pressKey("space");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["show replace", "replace in files", "focus replace"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.replaceInFiles");
  },
  { autoExecute: true, chainable: "any" }
);

command("replace all", async (api) => {
  await api.evaluateInPlugin("editor.action.replaceAll");
});

command(
  ["show search", "search", "find in files", "focus search"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.findInFiles");
    await api.setMouseLocation(188, 99);
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["search for <%text%>"],
  async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.findInFiles");
    await api.delay(100);
    await api.typeText(matches.text);
    await api.setMouseLocation(188, 99);
    await api.delay(1000);
    await api.evaluateInPlugin("search.action.focusNextSearchResult");
  },
  { autoExecute: true }
);

command(
  ["recent files", "show recent files"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.quickOpen");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["file <%text%>", "open file <%text%>"],
  async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.quickOpen");
    await api.runCommand(`system ${matches.text}`);
    await api.delay(100);
    await api.pressKey("enter");
  },
  { autoExecute: true }
);

command(
  ["search file <%text%>", "search files <%text%>"],
  async (api, matches) => {
    await api.evaluateInPlugin("workbench.action.quickOpen");
    await api.typeText(matches.text);
  },
  { autoExecute: true }
);

command(
  [
    "show source control",
    "focus changes",
    "focus source control",
    "show git",
    "show changes",
  ],
  async (api) => {
    await api.evaluateInPlugin("workbench.scm.focus");
    await api.setMouseLocation(226, 337);
  }
);

command(["focus editor"], async (api) => {
  await api.evaluateInPlugin("workbench.action.focusActiveEditorGroup");
  await api.setMouseLocation(751, 498);
});

command(
  ["focus repositories", "show repositories", "focus repos", "show repos"],
  async (api) => {
    await api.evaluateInPlugin("workbench.scm.repositories.focus");
    await api.setMouseLocation(122, 167);
  }
);

command("show extensions", async (api) => {
  await api.evaluateInPlugin("workbench.view.extensions");
  await api.setMouseLocation(185, 455);
});

command(["move left", "move to left group", "move group left"], async (api) => {
  await api.evaluateInPlugin("workbench.action.moveEditorToPreviousGroup");
});

command(["close workspace", "new workspace"], async (api) => {
  await api.evaluateInPlugin("workbench.action.closeFolder");
});

command("new file", async (api) => {
  await api.pressKey("n", ["commandOrControl"]);
});

command(
  ["open workspace", "switch workspace", "change workspace", "show workspaces"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.openRecent");
  }
);

command(
  [
    "previous workspace",
    "last workspace",
    "switch to previous workspace",
    "switch to last workspace",
    "go to previous workspace",
    "go to last workspace",
  ],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.openRecent");
    await api.delay(100);
    await api.pressKey("enter");
  }
);

command(
  [
    "open workspace <%text%>",
    "switch workspace <%text%>",
    "change workspace <%text%>",
    "switch workspace to <%text%>",
    "change workspace to <%text%>",
  ],
  async (api, cmd) => {
    await api.focusApplication("code");
    await api.evaluateInPlugin("workbench.action.openRecent");
    await api.runCommand("system " + cmd.text);
  }
);

command(["duplicate workspace", "duplicate window"], async (api, cmd) => {
  await api.evaluateInPlugin("workbench.action.duplicateWorkspaceInNewWindow");
});

// use "open app term" / "focus app term" to disambiguate from VSCode term in this context.
command(
  ["show term", "show terminal", "toggle term", "toggle terminal"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal");
  },
  { autoExecute: true }
);

command(["new terminal", "new term"], async (api) => {
  await api.evaluateInPlugin("workbench.action.terminal.new");
});

command(
  ["next terminal", "next term", "terminal down", "term down"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.focusNext");
  }
);

command(
  ["previous terminal", "previous term", "terminal up", "term up"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.focusPrevious");
  }
);

command(
  ["hide terminal", "hide term", "close terminal", "close term"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.focus");
    await api.delay(100);
    await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal");
  }
);

command("prompt", async (api) => {
  await api.evaluateInPlugin("workbench.action.showCommands");
});

command("prompt <%text%>", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.showCommands");
  await api.typeText(matches.text);
});

command(
  ["scroll to bottom"],
  async (api) => {
    await api.evaluateInPlugin("scrollEditorBottom");
  },
  { autoExecute: true, chainable: "any" }
);

command(
  ["scroll to top"],
  async (api) => {
    await api.evaluateInPlugin("scrollEditorTop");
  },
  { autoExecute: true, chainable: "any" }
);

command(["delete lines"], async (api) => {
  await api.evaluateInPlugin("editor.action.deleteLines");
});

command(["copy lines"], async (api) => {
  await api.evaluateInPlugin("expandLineSelection");
  await api.evaluateInPlugin("editor.action.clipboardCopyAction");
});

command(["duplicate lines"], async (api) => {
  await api.evaluateInPlugin("expandLineSelection");
  await api.evaluateInPlugin("editor.action.clipboardCopyAction");
  await api.delay(50);
  await api.pressKey("right");
  await api.pressKey("v", ["commandOrControl"]);
});

command(
  [
    "comment lines",
    "comment line",
    "comment",
    "uncomment",
    "uncomment line",
    "uncomment lines",
  ],
  async (api) => {
    await api.evaluateInPlugin("editor.action.commentLine");
  }
);

command(["duplicate block"], async (api) => {
  await api.runCommand("copy block");
  await api.runCommand("end of block");
  await api.delay(200);
  await api.pressKey("enter", [], 2);
  await api.pressKey("v", ["commandOrControl"]);
  await api.pressKey("backspace");
});

command(["duplicate element"], async (api) => {
  await api.runCommand("copy element");
  await api.runCommand("end of element");
  await api.delay(200);
  await api.typeText(", ");
  await api.pressKey("v", ["commandOrControl"]);
});

command("replace", async (api) => {
  await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch");
  await api.delay(50);
  await api.pressKey("backspace");
});

command("replace in files <%text%>", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.replaceInFiles");
  await api.delay(100);
  await api.typeText(matches.text);
});

command(
  ["autocomplete", "show suggestions", "show suggestion"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.triggerSuggest");
  }
);

command(
  ["hint", "hints", "show hints", "show hint"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.triggerParameterHints");
  },
  { autoExecute: true }
);

command(["fix", "quick fix", "fix problem", "fix error"], async (api) => {
  await api.evaluateInPlugin("editor.action.quickFix");
});

command(["fix next problem", "fix next error"], async (api) => {
  await api.evaluateInPlugin("editor.action.marker.next");
  await api.evaluateInPlugin("editor.action.quickFix");
});

command(
  [
    "fix previous problem",
    "fix last problem",
    "fix previous error",
    "fix last error",
  ],
  async (api) => {
    await api.evaluateInPlugin("editor.action.marker.prev");
    await api.evaluateInPlugin("editor.action.quickFix");
  }
);

command(
  [
    "go to previous problem",
    "previous problem",
    "go to previous error",
    "previous error",
  ],
  async (api) => {
    await api.evaluateInPlugin("editor.action.marker.prev");
  }
);

command(
  ["go to next problem", "next problem", "next error", "go to next error"],
  async (api) => {
    await api.evaluateInPlugin("editor.action.marker.next");
  }
);

command(["go to definition", "definition"], async (api) => {
  await api.evaluateInPlugin("editor.action.revealDefinition");
});

command(
  ["duplicate tab", "duplicate right", "duplicate group"],
  async (api) => {
    await api.evaluateInPlugin(
      "workbench.action.duplicateActiveEditorGroupRight"
    );
  }
);

command(
  ["kill terminal", "kill term"],
  async (api) => {
    await api.evaluateInPlugin("workbench.action.terminal.kill");
  },
  { autoExecute: true }
);

command(
  "next result",
  async (api) => {
    await api.evaluateInPlugin("search.action.focusNextSearchResult");
  },
  { autoExecute: true }
);

command("previous result", async (api) => {
  await api.evaluateInPlugin("search.action.focusPreviousSearchResult");
});

command(["next change"], async (api) => {
  await api.evaluateInPlugin("workbench.action.compareEditor.nextChange");
});

command(["previous change", "last change"], async (api) => {
  await api.evaluateInPlugin("workbench.action.compareEditor.previousChange");
});

command(
  [
    "toggle copilot",
    "turn off copilot",
    "turn on copilot",
    "disable copilot",
    "enable copilot",
    "turn copilot off",
    "turn copilot on",
  ],
  async (api) => {
    await api.evaluateInPlugin("github.copilot.toggleCopilot");
    await api.setMouseLocation(1653, 955);
  }
);

command(["toggle mini map", "show mini map", "hide mini map"], async (api) => {
  await api.evaluateInPlugin("editor.action.toggleMinimap");
});

command("sort lines", async (api) => {
  await api.evaluateInPlugin("editor.action.sortLinesAscending");
});
