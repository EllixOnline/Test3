const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "texts");
let mergedContent = "";

for (let i = 1; i <= 10; i++) {
  let remainingLines = i;
  let nextFile = i;
  let selectedLines = [];

  while (remainingLines > 0 && nextFile <= 10) {
    const filePath = path.join(dirPath, `${nextFile}.txt`);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const lines = fileContent.split("\r\n");

      const linesToTake = Math.min(remainingLines, lines.length);
      selectedLines.push(...lines.slice(0, linesToTake));
      remainingLines -= linesToTake;
    }

    nextFile++;
  }

  mergedContent += selectedLines.join("\r\n") + "\n";
}

const outputFilePath = path.join("./Outputs/output.txt");
fs.writeFileSync(outputFilePath, mergedContent);
