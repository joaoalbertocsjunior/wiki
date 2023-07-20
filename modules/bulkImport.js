const fs = require('fs');
const path = require('path');

function bulkImport(folderPath) {
    const modules = {};

    // Recursively read the contents of the folder and subfolders
    function readFolder(folderPath) {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                // Recurse into subfolder
                readFolder(filePath);
            } else if (file.endsWith('.js')) {
                // Get the module name without the file extension
                const moduleName = file.replace('.js', '');

                // Import the module dynamically using `require`
                const modulePath = path.resolve(filePath);
                const module = require(modulePath);

                // Add the imported module to the object
                modules[moduleName] = module;
            }
        }
    }

    // Start reading the top-level folder
    readFolder(folderPath);

    return modules;
}

module.exports = bulkImport;