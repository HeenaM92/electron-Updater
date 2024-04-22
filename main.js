const { app, BrowserWindow } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");
log.transports.file.resolvePathFn = () =>
  path.join("D:workspaceelectronUpdater", "logs/main.log");
log.info("Hello,log");
log.warn("some problem appears");
let win;

function createWindow() {
  win = new BrowserWindow({ width: 600, height: 800 });
  // console.log(path.join(__dirname, "index.html"));
  win.loadFile(path.join(__dirname, "index.html"));
}
app.on("ready", () => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on("update-available", () => {
  log.info("update-available");
});

autoUpdater.on("checking-for-update", () => {
  log.info("checking-for-update");
});

autoUpdater.on("download-progress", () => {
  log.info("download-progress");
});

autoUpdater.on("update-downloaded", () => {
  log.info("update-downloaded");
});
