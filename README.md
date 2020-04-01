# simple-electron-react-app

Simple example for build react app on Electron.

P.S. if anybody can fix [this problem](https://gist.github.com/MazsLi/4d4c3191b822a57ab1d7565d785f86ff), please tell me, thanks!  
When i use img to replace CardMedia, is work!

## library

### debug
[debug](https://github.com/visionmedia/debug) is a tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers. 

Use case: 
```javascript
// define
const debug = require('debug')('core:main');
// use in code
debug('something...');

// define
import debug from 'debug';
// use in code
debug('core:main')('something...');

// use in command
set debug=* & npm start    // show all log
set debug=core & npm start // show all tag that has core
set debug=core:main & npm start // show all tag that has core:main

```

### Material-UI

material-ui: https://github.com/mui-org/material-ui