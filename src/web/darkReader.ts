import sx from "sx";

// Dark Reader extension for Chrome:
// https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en-US
sx.app("chrome").command(
  ["dark mode", "toggle dark mode", "toggle light mode", "light mode"],
  async (api) => {
    await api.pressKey("d", ["shift", "alt"]);
  },
  { autoExecute: true }
);
