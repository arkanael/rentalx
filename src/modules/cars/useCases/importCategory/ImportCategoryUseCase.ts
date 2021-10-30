import fs from "fs";

const csvParse = require('csv-parse')

class ImportCategoryUseCase {
      execute(file: Express.Multer.File): void {
           const stream = fs.createWriteStream(file.path);
           const parseFile = csvParse();

           stream.pipe(parseFile);

      }
}

export { ImportCategoryUseCase };
