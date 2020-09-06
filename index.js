const getByte = require('get-byte');

module.exports = function (data, debug) {
    if (debug) console.log("data:", data);
    
    const length = data.length !== undefined ? data.length : data.byteLength !== undefined ? data.byteLength : null;
    if (debug) console.log("length:", length);
    
    if (typeof data === "string") {
        return length > 4 && data.endsWith('.png');

    } else {
        if (length < 8) {
            return false;
        }
        
        return getByte(data, 0) === 0x89 &&
            getByte(data, 1) === 0x50 &&
            getByte(data, 2) === 0x4E &&
            getByte(data, 3) === 0x47 &&
            getByte(data, 4) === 0x0D &&
            getByte(data, 5) === 0x0A &&
            getByte(data, 6) === 0x1A &&
            getByte(data, 7) === 0x0A;
    }
};