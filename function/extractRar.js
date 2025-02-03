const { Extract } = require('node-unrar');
const unzipper = require('unzipper');
const fs = require('fs');
function extractRar(rarPath, extractPath) {
    return new Promise((resolve, reject) => {
        const rar = new Extract(rarPath);
        rar.extract(extractPath, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function extractZip(zipPath, extractPath) {
    return fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: extractPath }))
        .promise();
}

module.exports = {
    extractRar,
    extractZip,
};