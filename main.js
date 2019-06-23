const {app, BrowserWindow} = require('electron')

let window = null

app.on('ready', () => {
  window = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#000',
    webPreferences: {nodeIntegration: true}
  })

  window.loadURL(`file://${__dirname}/src/index.html`)

  window.on('closed', () => {
    app.quit()
  })
})
