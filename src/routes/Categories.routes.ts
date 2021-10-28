import { Router } from "express";
import { CaregoriyRepository } from "../repositories/CaregoriyRepository";

const categoriesRoutes = Router();
const caregoriyRepository = new CaregoriyRepository();

categoriesRoutes.post("/", (request, response) => {
      const { name, description } = request.body;

      caregoriyRepository.create({ name, description });

      return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
      const result = caregoriyRepository.list();
      return response.json(result);
});

export { categoriesRoutes };
