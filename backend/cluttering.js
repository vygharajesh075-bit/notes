const fs = require("fs");
const path = require("path");

const dirPath = "./public";

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    files.forEach(file => {
        let ext = path.extname(file).slice(1);

        if (ext) {
            let folderPath = path.join(dirPath, ext);

            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            let oldPath = path.join(dirPath, file);
            let newPath = path.join(folderPath, file);

            fs.rename(oldPath, newPath, (err) => {
                if (err) console.log("Error moving file:", err);
            });
        }
    });
});