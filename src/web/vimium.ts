import sx from "sx";

// Vimium extension for Chrome:
// https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en
const { command } = sx.app("chrome");

/**
 * Add these to your custom commands
 * Vimium options > Custom key mappings
 *
 * ```Custom key mappings
 * # Insert your preferred key mappings here.
 * unmapAll
 * map <c-x> closeOtherTabs
 * map W moveTabToNewWindow
 * ```
 *
 * See for all vimium commands:
 * https://github.com/philc/vimium/blob/master/background_scripts/commands.js
 */
command(
  "close other tabs",
  async (api) => {
    await api.pressKey("x", ["commandOrControl"]);
  },
  { autoExecute: true }
);

command(
  ["pop tab", "pop out tab", "tab pop"],
  async (api) => {
    await api.pressKey("w", ["shift"]);
  },
  { autoExecute: true }
);
