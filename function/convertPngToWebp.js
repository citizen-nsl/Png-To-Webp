const sharp = require('sharp');

function convertPngToWebp(pngPath) {
    const webpPath = pngPath.replace('.png', '.webp');
    return sharp(pngPath)
        .webp()
        .toFile(webpPath)
        .then(() => webpPath);
}


module.exports = convertPngToWebp;