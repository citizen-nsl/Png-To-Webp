const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
function createZipArchive(files, archiveName) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(archiveName);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => resolve(archiveName));
        archive.on('error', (err) => reject(err));

        archive.pipe(output);
        
        files.forEach((file) => {
            archive.file(file, { name: path.basename(file) });
        });

        archive.finalize();
    });
}

module.exports = createZipArchive;

