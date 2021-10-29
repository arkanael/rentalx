import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
      return CreateCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
