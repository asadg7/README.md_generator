const fs = require("fs");

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File successfully created!"
      });
    });
  });
};

module.exports = {
  writeFile: writeFile
};