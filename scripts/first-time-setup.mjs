import * as dotenv from "dotenv";
dotenv.config();
import fs from "fs-extra";
import os from "os";
import path from "path";
import { execa } from "execa";

/**
 * Creates initial files, folders, and config for Serenade SX.
 */
const resetColor = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const purple = "\x1b[35m";
const yellow = "\x1b[33m";

const cwd = process.cwd();
const envPath = path.join(cwd, ".env");
const userDataPath = path.join(cwd, "user-data");
const sxConfigTemplatePath = path.join(
  cwd,
  "sx",
  "templates",
  "sx-config-template.ts"
);
const sxUserConfigPath = path.join(cwd, "src", "sx-config.ts");
let error = false;

function createEnv() {
  if (!fs.existsSync(envPath)) {
    fs.writeFile(
      path.join(cwd, ".env"),
      `VSCODE_WORKSPACE_PATH=
AUTOHOTKEY_V1_EXE_PATH=${
        os.platform() === "win32"
          ? "C:/Program Files/AutoHotkey/AutoHotkey.exe"
          : ""
      }
AUTOHOTKEY_V2_EXE_PATH=${
        os.platform() === "win32"
          ? "C:/Program Files/AutoHotkey/v2/AutoHotkey64.exe"
          : ""
      }`
    );
    console.log(`Created ${envPath}`);
  }
}
createEnv();

function ensureUserDataFiles() {
  fs.ensureDirSync(path.join(userDataPath, "commands"));

  [
    "apps",
    "bookmarks",
    "hints",
    "macros",
    "mouse-positions",
    "run-commands",
    "text-commands",
    "url-macros",
  ].forEach((baseName) => {
    const dataPath = path.join(userDataPath, `${baseName}.json`);
    if (!fs.existsSync(dataPath)) {
      fs.writeFile(dataPath, "{}");
      console.log(`Created ${dataPath}`);
    }
  });
}
ensureUserDataFiles();

function sxConfigSetup() {
  if (!fs.existsSync(sxUserConfigPath)) {
    fs.copyFileSync(sxConfigTemplatePath, sxUserConfigPath);
    console.log(`Created ${sxUserConfigPath}`);
  }
}
sxConfigSetup();

if (!fs.existsSync(path.join(os.homedir(), ".serenade"))) {
  console.log("platform detected: " + os.platform());
  console.log(
    `Tried to find serenade directory at ${blue}${os.homedir()}${resetColor}.`
  );
  console.log('Could not find "~/.serenade" directory.');
  console.log(
    `Try running ${blue}npm run setup${resetColor} again on the same drive as your ${blue}~/.serenade${resetColor} directory.`
  );
}

async function runBuild() {
  let result;
  try {
    console.log("platform detected: " + os.platform());
    console.log(
      `Assuming ${blue}~/.serenade${resetColor} directory is: ${blue}${os.homedir()}${resetColor}.`
    );
    console.log(
      `If this is wrong, you may need to run ${blue}npm run setup${resetColor} again on the same drive as your ${blue}~/.serenade${resetColor} directory.`
    );
    console.log("");
    console.log(`running ${blue}npm run build${resetColor}...`);
    if (os.platform() === "win32") {
      result = await execa("powershell.exe", [
        "npm",
        "--prefix",
        cwd,
        "run",
        "build",
      ]);
    } else {
      result = await execa("bash", ["-c", `npm --prefix ${cwd} run build`]);
    }
    if (result.stderr) {
      throw new Error(result.stderr);
    } else {
      console.log(result.stdout);
      console.log("");
      success();
    }
  } catch (error) {
    console.error(error);
    console.error(
      `${yellow}Warn: ${resetColor}Could not execute "npm run build". 
      ${
        process.platform === "win32"
          ? `
- Can try a different shell such as PowerShell, Git Bash, or WSL and try "npm install" and "npm run setup" again.
`
          : ""
      }
- Make sure to run "npm install" first before "npm run setup".

- If "npm run setup" is still failing, you can try to run "npm run build" manually.
      `
    );
  }
}

await runBuild();

function success() {
  console.log(`-----⚡ ${purple}serenade-sx${resetColor} setup complete!-----

Voice commands:
🎤 Say ${green}"show help"${resetColor} to get started.

Run ${blue}npm run dev${resetColor} to start watching for changes.
`);
}
