const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindows;

function createWindow() {
  mainWindows = new BrowserWindow({ width: 900, height: 600 });
  mainWindows.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindows.on("closed", () => (mainWindows = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindows === null) {
    createWindow();
  }
});
