import fs from "fs";
import path from "path";

export class Translator {
  translations: any;

  constructor() {
    this.translations = this.getTranslationsJson();
  }

  getTranslationsJson() {
    const filePath = path.join(__dirname, "data.json");
    const fileContent = fs.readFileSync(filePath);
    return JSON.parse(fileContent.toString("utf-8"));
  }

  getTranslation(key: string) {
    return this.translations[key];
  }
}
