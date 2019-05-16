/**
*
* @Name : FirstElectron/main.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-05-16
* @Released under : https://github.com/BaseMax/FirstElectron/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/FirstElectron
*
**/
const { app, BrowserWindow } = require('electron')

function initWindow () {
	let window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})
	window.loadFile('index.html')
}

app.on('ready', initWindow)
