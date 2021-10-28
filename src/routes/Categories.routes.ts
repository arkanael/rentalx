import { Router } from "express";
import { CaregoriyRepository } from "../repositories/CaregoriyRepository";

const categoriesRoutes = Router();
const caregoriyRepository = new CaregoriyRepository();

categoriesRoutes.post("/", (request, response) => {
      const { name, description } = request.body;

      const categoryAlreadyExists = caregoriyRepository.findByName(name);

      if(categoryAlreadyExists){
            return response.status(400).json({error: "Category Alredy exists!"});
      }

      caregoriyRepository.create({ name, description });

      return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
      const result = caregoriyRepository.findAll();
      return response.json(result);
});

export { categoriesRoutes };
