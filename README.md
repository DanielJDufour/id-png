# id-png
Identify a PNG File in a Variety of In-Memory Objects, including ArrayBuffer, Buffer, DataView, and Uint8Array

# install
```bash
npm install id-png
```

# usage
```javascript
const idPNG = require("id-png");

idPNG(buffer);
idPNG(arrayBuffer);
idPNG(dataView);
idPNG(uint8Array);
```