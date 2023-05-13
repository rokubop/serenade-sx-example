/**
 * Entry file for serenade custom scripts
 *
 * All custom scripts should be imported here
 */
import * as dotenv from "dotenv";
dotenv.config();
import "sx";
// ----------------------------------------
// add new imports hereimport "apps/chrome";
import "apps/code";
import "global/autoHotkey";
import "global/debug";
import "global/mouse-grid";
import "global/windows";
import "terminal/git";
import "terminal/npm";
import "terminal/terminal";
import "terminal/yarn";
import "web/darkReader";
import "web/vimium";
import "web/youtube";// @sx-dynamic-app-import

import onCommandsRegistered from "sx/display-registered-commands";
console.log("\ninit custom scripts " + new Date().toLocaleTimeString());
void onCommandsRegistered();
