const {app, BrowserWindow} = require('electron')
// const path = require('path')
// const url = require('url')

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))
})
