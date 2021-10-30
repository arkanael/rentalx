import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const upload = multer({
      dest: "./tmp",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
      return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
      return importCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
      return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
