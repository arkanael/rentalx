import express from "express";
import { categoriesRoutes } from "./routes/Categories.routes";
import { specificationRoutes } from "./routes/Specification.routes";
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server is running!"));
