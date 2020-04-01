
import { app, BrowserWindow, protocol } from 'electron' ;
import path from 'path';
import debug from 'debug';

debug('core:main')('process.argv: ' + process.argv);

// electron app ready
app.on( 'ready', () => {
    // same
    // console.log(path.resolve(process.cwd(), 'build'))
    // console.log(__dirname)

    registerProtocol('build', __dirname);

    debug('core:app')('ready...');

    let mainWindow = new BrowserWindow({
        title: 'Simple Electron React App', // electron will use html title if you have't set value
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
    });

    // open debug tool
    mainWindow.webContents.openDevTools({
        mode: 'undocked', // right, bottom, undocked, detach
    });
    
    // load entry html
    mainWindow.loadFile(path.join(__dirname, '/html/index.html'));

});

// register protocol (need after app ready)
function registerProtocol( name, refDir ) {

    // protocol need use lower case
    name = name.toLowerCase();
    debug('core:protocol')( `register: ${name} to ${refDir}`);
  
    protocol.registerFileProtocol( name, (request, callback) => {
  
      if (request.url) {
        const url = path.normalize( request.url ).substr( name.length + 1 );
      
        debug('core:protocol')( 'before: ' + url );
        debug('core:protocol')( 'after: ' + path.join( refDir, url ) );
        
        callback(path.join( refDir, url ))
      } else {
        console.error( 'Failed to register protocol: ' + name );
      }
  
    });
      
  }