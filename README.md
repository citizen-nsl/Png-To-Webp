# PNG to WebP Converter and Archiver เพื่อการศึกษาเท่านั้น

This Node.js project converts PNG images to WebP format and then archives them into a ZIP or RAR file. It supports both ZIP and RAR input files, extracts the PNG images, converts them to WebP, and then creates a ZIP archive of the converted WebP images.

## Features

- Extract PNG files from ZIP or RAR archives
- Convert PNG images to WebP format
- Create a ZIP archive containing the converted WebP images
- Clean up temporary WebP files after archiving

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- For RAR file extraction: [unrar](https://www.rarlab.com/download.htm) (or use `node-unrar` package)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/citizen-nsl//Png-To-Webp.git
    cd Png-To-Webp
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. If you're working with RAR files, make sure you have the `unrar` utility installed on your system.

## Usage

To use this script, place your ZIP or RAR file (containing PNG images) in the project directory and run the script.

1. Place your ZIP or RAR file (e.g., `images.zip` or `images.rar`) in the root directory of the project.
2. Run the script using Node.js:

    ```bash
    node app.js
    ```

The script will:

- Extract the PNG images from the ZIP or RAR archive.
- Convert each PNG image to WebP format.
- Create a new ZIP archive (`webp_images.zip`) containing the converted WebP images.
- Optionally, clean up the temporary WebP files.

## Supported File Formats

- **Input**: ZIP or RAR archives containing PNG files.
- **Output**: WebP images, compressed into a ZIP archive.

## Example
![image](https://github.com/user-attachments/assets/ee7dd053-3d93-4591-9473-54fac5a4b9e5)

![image](https://github.com/user-attachments/assets/0e61e004-512b-4f59-a92b-7003fe6fb500)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [sharp](https://www.npmjs.com/package/sharp) for image processing (converting PNG to WebP).
- [archiver](https://www.npmjs.com/package/archiver) for creating ZIP archives.
- [unrar](https://www.rarlab.com/download.htm) for extracting RAR files.
- [node-unrar](https://www.npmjs.com/package/node-unrar) for handling RAR extraction in Node.js.

## Contributing

Feel free to open issues or submit pull requests for enhancements or bug fixes.

