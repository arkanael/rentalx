import { Router } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
      const { name, description } = request.body;

      const createCategoryService = new CreateCategoryService(categoryRepository);

      createCategoryService.execute({ name, description });

      return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
      const result = categoryRepository.findAll();
      return response.json(result);
});

export { categoriesRoutes };
