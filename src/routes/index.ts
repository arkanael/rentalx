import { Router } from "express";
import { categoriesRoutes } from "./Categories.routes";
import { specificationRoutes } from "./Specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export{router}