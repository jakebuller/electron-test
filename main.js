const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

let pluginName;

console.log(process.platform);
switch (process.platform) {
    case 'win32':
        pluginName = 'pepflashplayer.dll';
        break;
    case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin';
        break;
}

console.log(path.join(__dirname, 'PepperFlash', pluginName));
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'PepperFlash', pluginName));
app.commandLine.appendSwitch('ppapi-flash-version', '23.0.0.207');

app.on('ready', function () {
    mainWindow = new BrowserWindow(
        {
            width: 1100,
            height: 800,
            webPreferences: {
                plugins: true
            }
        }
    );
    mainWindow.loadURL('file://' + __dirname + '/messaging.html');
});

// /Users/jake.buller/Library/Application Support/Google/Chrome/PepperFlash/23.0.0.207/PepperFlashPlayer.plugin