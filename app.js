const fs = require('fs');
const path = require('path');

const { extractRar, extractZip } = require('./function/extractRar');
const convertPngToWebp = require('./function/convertPngToWebp');
const createZipArchive = require('./function/createZipArchive');



async function main() {
    const zipFilePath = path.join(__dirname, 'input', 'images.zip');
    const extractDir = 'extracted_files/';

    // แตกไฟล์ ZIP หรือ RAR
    const isRar = zipFilePath.endsWith('.rar');
    if (fs.existsSync(extractDir)) {
        fs.rmdirSync(extractDir, { recursive: true });
    }
    fs.mkdirSync(extractDir);

    if (isRar) {
        try {
            await extractRar(zipFilePath, extractDir);
        } catch (error) {
            console.error('Error extracting RAR:', error);
            return;
        }
    } else {
        try {
            await extractZip(zipFilePath, extractDir);
        } catch (error) {
            console.error('Error extracting ZIP:', error);
            return;
        }
    }

    const files = fs.readdirSync(extractDir).filter((file) => file.endsWith('.png'));
    const webpFiles = [];

    // แปลง PNG เป็น WebP
    for (const file of files) {
        const pngPath = path.join(extractDir, file);
        try {
            const webpFile = await convertPngToWebp(pngPath);
            webpFiles.push(webpFile);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }

    // สร้างไฟล์ ZIP
    const archiveName = path.join(__dirname, 'output', 'webp_images.zip');
    try {
        await createZipArchive(webpFiles, archiveName);
        console.log(`Archive created successfully: ${archiveName}`);

        // ลบไฟล์ WebP หลังจากทำการบีบอัดเสร็จ
        webpFiles.forEach((file) => fs.unlinkSync(file));
    } catch (error) {
        console.error('Error creating ZIP archive:', error);
    }
}

main();
