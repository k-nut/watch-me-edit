import fs from "fs";
import path from "path";

export class Translator {
  translations: any;

  constructor() {
    this.translations = this.getTranslationsCSV();
  }

  getTranslationsCSV() {
    const filePath = path.join(__dirname, "data.csv");
    const fileContent = fs.readFileSync(filePath);
    return fileContent
      .toString("utf-8")
      .split("\n")
      .reduce((map: any, line) => {
        const [key, value] = line.split(",");
        map[key] = value;
        return map;
      }, {});
  }

  getTranslation(key: string) {
    return this.translations[key];
  }
}
