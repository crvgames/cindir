const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
  const w = new BrowserWindow({ width: 1280, height: 720, autoHideMenuBar: true });
  Menu.setApplicationMenu(null);
  w.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
